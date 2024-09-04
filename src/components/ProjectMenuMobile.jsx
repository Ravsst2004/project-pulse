import { useEffect, useRef } from "react";
import Button from "./Button";

export default function ProjectMenuMobile({
  projectState,
  setOpenProject,
  handleSelectDetailProject,
}) {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenProject(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenProject]);

  return (
    <div
      ref={menuRef}
      className="fixed flex flex-col justify-center w-full h-fit bg-black/90 z-10"
    >
      <Button onClick={() => setOpenProject(false)}>Close</Button>

      {projectState.projects && projectState.projects.length > 0 ? (
        <div className="flex flex-col justify-center items-center text-white gap-y-2 p-4">
          {projectState.projects.map((project) => {
            return (
              <h1
                className="text-xl cursor-pointer"
                onClick={() => handleSelectDetailProject(project)}
                key={project.id}
              >
                {project.title}
              </h1>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-white p-4">
          <h1 className="text-xl">No Available Project</h1>
        </div>
      )}
    </div>
  );
}
