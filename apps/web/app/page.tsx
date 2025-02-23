import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl font-bold underline">
        Hello world!
        <Button className="mx-2" variant="outline">Start</Button>
      </h1>
    </div>
  );
}
