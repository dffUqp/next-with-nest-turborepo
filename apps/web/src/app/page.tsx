import { Button } from "@packages/ui";

export default function Home() {
  const [_] = ["test"];

  return (
    <div>
      <h1 className="text-orange-600">Home page</h1>
      <Button appName="nest.js-with-next.js-monorepo">Click me</Button>
    </div>
  );
}
