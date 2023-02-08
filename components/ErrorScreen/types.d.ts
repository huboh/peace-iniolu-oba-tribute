import { ReactElement } from "react";

export interface ErrorScreenProps {
  error?: Error;
  title?: string;
  message?: string;
  ctaText?: string;
  className?: string;
  ctaIcon?: ReactElement;
  ctaFunction?: () => void;
}