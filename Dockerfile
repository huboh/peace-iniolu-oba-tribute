FROM alpine:3 as downloader

ARG TARGETOS
ARG TARGETARCH
ARG VERSION=0.16.5

ENV BUILDX_ARCH="${TARGETOS:-linux}_${TARGETARCH:-amd64}"

# Install the dependencies
RUN apk add --no-cache \
  ca-certificates \
  unzip \
  wget \
  zip \
  zlib-dev

RUN wget https://github.com/pocketbase/pocketbase/releases/download/v${VERSION}/pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
  && unzip pocketbase_${VERSION}_${BUILDX_ARCH}.zip \
  && chmod +x /pocketbase

FROM scratch

EXPOSE 8090

COPY --from=downloader /pocketbase /pb/pocketbase

# local changes should reflect
COPY /pb_migrations /pb/pb_migrations

CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8090"]