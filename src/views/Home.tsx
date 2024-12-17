import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <>
      <h1 className="text-5xl text-center font-bold">Home</h1>
      {console.log("Home")}
      <div className="flex gap-4 justify-center">
        <Button>Click me</Button>
        <Button variant={"destructive"}>destructive</Button>
        <Button variant={"ghost"}>ghost</Button>
        <Button variant={"link"}>link</Button>
        <Button variant={"outline"}>outline</Button>
        <Button variant={"secondary"}>secondary</Button>
        <Button size={"lg"}>Click me</Button>

      </div>
    </>
  );
};

export default Home;
