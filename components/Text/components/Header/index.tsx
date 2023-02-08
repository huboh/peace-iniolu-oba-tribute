import H1 from "./variants/h1";
import H2 from "./variants/h2";
import { HeaderProps } from './types';

export default function Header(props: HeaderProps) {
  return (
    <H1 { ...props } />
  );
}

Header.H1 = H1;
Header.H2 = H2;