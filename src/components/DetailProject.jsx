import { CiEdit } from "react-icons/ci";
import Button from "./Button";
import { RiDeleteBack2Line } from "react-icons/ri";

export default function DetailProject({
  selectedProject,
  setSelectedProject,
  setProjectState,
  handleDeleteProject,
}) {
  const handleClose = () => {
    setSelectedProject(null);
    setProjectState((prevProject) => ({
      ...prevProject,
      selectedProjectId: undefined,
    }));
  };

  return (
    <div className="flex flex-col text-xl md:min-w-96 text-stone-800 p-4 mx-10 my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl">{selectedProject.title}</h1>
        <div className="flex items-center gap-2">
          <Button>
            <RiDeleteBack2Line
              onClick={() => handleDeleteProject(selectedProject.id)}
            />
          </Button>
          <Button>
            <CiEdit />
          </Button>
        </div>
      </div>
      <p className="font-extralight">{selectedProject.dueDate}</p>
      <p>{selectedProject.description}</p>

      <hr className="my-4" />
      <Button onClick={handleClose}>Close</Button>
    </div>
  );
}
