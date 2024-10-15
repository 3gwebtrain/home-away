import { Input } from "../ui/input";

export default function NavSearch(): JSX.Element {
  return (
    <Input
      type="text"
      placeholder="Find a property..."
      className="max-w-xs dark:bg-muted"
    />
  );
}
