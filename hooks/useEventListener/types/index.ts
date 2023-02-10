import { RefObject } from 'react';

export type IsAny<T, U, V> = 0 extends (1 & T) ? U : V;
export type Target<T extends EventTarget> = RefObject<T> | T;
export type Listener = 'addEventListener' | 'removeEventListener';

export type Type<T extends EventTarget> = keyof EventMap<T> & string;
export type EventType<T extends EventTarget, U extends Type<T>> = Extract<EventMap<T>[U], Event>;
export type EventHandler<T extends EventTarget, U extends Type<T>, V extends Event = EventType<T, U>> = (this: T, e: V) => any;

export interface UseEventListenerProps<T extends EventTarget, U extends Type<T>, V extends Event> {
  target: Target<T>;
  eventType: U | U[];
  eventOptions?: EventListenerOptions;
  eventHandler: EventHandler<T, U, V>;
}

export type UseEventListener = <T extends EventTarget, U extends Type<T> = Type<T>, V extends Event = EventType<T, U>>(props: UseEventListenerProps<T, U, V>) => void;

export type GetTarget = <T extends EventTarget>(target: Target<T>) => T | null;
export type GetListener = <T extends EventTarget, U extends Listener>(t: T, l: U) => (type: string, handler: (this: T, e: any) => any, options?: Parameters<T[U]>[2]) => void;

export type EventMap<T extends EventTarget> =
  T extends Window ? WindowEventMap :
  T extends Document ? DocumentEventMap :
  T extends Animation ? AnimationEventMap :
  T extends FileReader ? FileReaderEventMap :
  T extends FontFaceSet ? FontFaceSetEventMap :
  T extends HTMLElement ? HTMLElementEventMap :
  T extends IDBRequest ? IDBRequestEventMap :
  T extends IDBDatabase ? IDBDatabaseEventMap :
  T extends IDBTransaction ? IDBTransactionEventMap :
  T extends EventSource ? EventSourceEventMap :
  T extends AbortSignal ? AbortSignalEventMap :
  T extends MediaDevices ? MediaDevicesEventMap :
  T extends MediaRecorder ? MediaRecorderEventMap :
  T extends MediaStream ? MediaStreamEventMap :
  T extends MediaStreamTrack ? MediaStreamTrackEventMap :
  T extends MessagePort ? MessagePortEventMap :
  T extends Notification ? NotificationEventMap :
  T extends PaymentRequest ? PaymentRequestEventMap :
  T extends Performance ? PerformanceEventMap :
  T extends PictureInPictureWindow ? PictureInPictureWindowEventMap :
  T extends RTCDTMFSender ? RTCDTMFSenderEventMap :
  T extends RTCDataChannel ? RTCDataChannelEventMap :
  T extends RTCDtlsTransport ? RTCDtlsTransportEventMap :
  T extends RTCPeerConnection ? RTCPeerConnectionEventMap :
  T extends RemotePlayback ? RemotePlaybackEventMap :
  T extends ScreenOrientation ? ScreenOrientationEventMap :
  T extends ServiceWorker ? ServiceWorkerEventMap :
  T extends ServiceWorkerContainer ? ServiceWorkerContainerEventMap :
  T extends ServiceWorkerRegistration ? ServiceWorkerRegistrationEventMap :
  T extends SourceBuffer ? SourceBufferEventMap :
  T extends SourceBufferList ? SourceBufferListEventMap :
  T extends SpeechSynthesis ? SpeechSynthesisEventMap :
  T extends SpeechSynthesisUtterance ? SpeechSynthesisUtteranceEventMap :
  T extends TextTrack ? TextTrackEventMap :
  T extends TextTrackCue ? TextTrackCueEventMap :
  T extends TextTrackList ? TextTrackListEventMap :
  T extends VisualViewport ? VisualViewportEventMap :
  T extends WebSocket ? WebSocketEventMap :
  T extends WebSocket ? WebSocketEventMap :
  T extends Worker ? WorkerEventMap :
  T extends XMLHttpRequestEventTarget ? XMLHttpRequestEventTargetEventMap :
  T extends PermissionStatus ? PermissionStatusEventMap :
  T extends MediaQueryList ? MediaQueryListEventMap :
  T extends MediaKeySession ? MediaKeySessionEventMap :
  T extends BroadcastChannel ? BroadcastChannelEventMap :
  T extends BaseAudioContext ? BaseAudioContextEventMap :
  { [key: string]: Event; };