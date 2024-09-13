interface ContainerProps {
  children: React.ReactNode;
}

export default function Container(props: ContainerProps) {
  const { children } = props;

  return <div className="mx-auto max-w-3xl w-full px-4 md:px-0">{children}</div>;
}
