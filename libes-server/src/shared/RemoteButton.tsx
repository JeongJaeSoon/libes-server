import { Button } from '@freee_jp/vibes';

type Props = Readonly<{
  children?: React.ReactNode | undefined;
}>;

function RemoteButton({ children, ...props }: Props) {
  return <Button {...props}>{children}</Button>;
}

export default RemoteButton;
