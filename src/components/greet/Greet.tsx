type greetProps = {
  name?: string;
};

export function Greet({ name }: greetProps) {
  return <p>Hello {name}</p>;
}
