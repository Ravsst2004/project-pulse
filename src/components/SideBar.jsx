import Button from "./Button";

export default function SideBar({ openSideBar }) {
  return (
    <aside
      className={`hidden md:block bg-stone-800 px-12 py-10 min-h-screen w-full text-white max-w-xs`}
    >
      <h1 className="text-4xl">Your Projects</h1>

      <Button className={"mt-5"}>+ Add Project</Button>
    </aside>
  );
}
