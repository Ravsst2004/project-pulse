import Button from "./Button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 md:hidden">
      <h1 className="text-4xl">Project Pulse</h1>

      <Button className={"mt-0 md:mt-5"}>+ Add Project</Button>
    </nav>
  );
}
