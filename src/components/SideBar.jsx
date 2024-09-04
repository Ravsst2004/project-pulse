import { FaRegDotCircle } from "react-icons/fa";
import Button from "./Button";

export default function SideBar({
  handleStartProject,
  projects,
  handleSelectDetailProject,
  selectedProject,
}) {
  return (
    <aside
      className={`hidden md:block bg-stone-800 px-12 py-10 min-h-screen w-full text-white max-w-xs`}
    >
      <h1 className="text-4xl">Project Pulse</h1>

      <Button onClick={handleStartProject} className={"mt-5"}>
        + Add Project
      </Button>

      {/* PROJECT MENU */}
      {projects.length > 0 ? (
        <div className="mt-10">
          {projects.map((project, index) => {
            return (
              <p
                key={project.id}
                className={`cursor-pointer text-2xl flex items-center gap-2 ${
                  selectedProject && selectedProject.id === project.id
                    ? "font-bold"
                    : "font-extralight"
                }`}
                onClick={() => handleSelectDetailProject(project)}
              >
                {index + 1}. {project.title}
              </p>
            );
          })}
        </div>
      ) : (
        <p className="text-2xl mt-10">No Available Project</p>
      )}
    </aside>
  );
}
