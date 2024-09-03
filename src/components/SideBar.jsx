import Button from "./Button";

export default function SideBar({ handleStartProject }) {
  return (
    <aside
      className={`hidden md:block bg-stone-800 px-12 py-10 min-h-screen w-full text-white max-w-xs`}
    >
      <h1 className="text-4xl">Project Pulse</h1>

      <Button onClick={handleStartProject} className={"mt-5"}>
        + Add Project
      </Button>
    </aside>
  );
}
