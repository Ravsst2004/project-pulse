import { CiEdit } from "react-icons/ci";
import Button from "./Button";
import { RiDeleteBack2Line } from "react-icons/ri";
import { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function DetailProject({
  selectedProject,
  setSelectedProject,
  setProjectState,
  handleDeleteProject,
  projectState,
}) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalDialog = useRef();
  const [openEdit, setOpenEdit] = useState(false);

  const handleClose = () => {
    setSelectedProject(null);
    setProjectState((prevProject) => ({
      ...prevProject,
      selectedProjectId: undefined,
    }));
  };

  const handleOpenEdit = () => {
    setOpenEdit(!openEdit);
  };

  const handleSaveEdit = () => {
    if (
      title.current.value.trim().length === 0 ||
      description.current.value.trim().length === 0 ||
      dueDate.current.value.trim().length === 0
    ) {
      modalDialog.current.open();
      return;
    }

    setOpenEdit(false);

    setProjectState((prevProject) => {
      const updatedProjects = prevProject.projects.map((project) => {
        if (project.id === selectedProject.id) {
          return {
            ...project,
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
          };
        }
        return project;
      });

      return {
        ...prevProject,
        projects: updatedProjects,
      };
    });

    setSelectedProject((prevState) => ({
      ...prevState,
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    }));
  };

  return (
    <div className="flex flex-col text-xl md:min-w-96 text-stone-800 p-4 mx-10 my-10">
      <Modal ref={modalDialog}>
        <p className="text-red-500 text-xl  md:text-2xl">
          Please fill in the required fields
        </p>
      </Modal>

      <div className="flex justify-between items-center">
        {openEdit ? (
          <Input
            type="text"
            label="title"
            defaultValue={selectedProject.title}
            ref={title}
          />
        ) : (
          <h1 className="text-3xl">{selectedProject.title}</h1>
        )}

        <div className="flex items-center gap-2">
          <Button onClick={() => handleDeleteProject(selectedProject.id)}>
            <RiDeleteBack2Line />
          </Button>
          <Button onClick={handleOpenEdit}>
            <CiEdit />
          </Button>
        </div>
      </div>

      {openEdit ? (
        <Input
          type="date"
          label="Due Date"
          defaultValue={selectedProject.dueDate}
          ref={dueDate}
        />
      ) : (
        <p className="font-extralight">{selectedProject.dueDate}</p>
      )}

      {openEdit ? (
        <Input
          type="text"
          label="Description"
          defaultValue={selectedProject.description}
          ref={description}
          textarea
        />
      ) : (
        <p>{selectedProject.description}</p>
      )}

      <hr className="my-4" />
      {openEdit && <Button onClick={handleSaveEdit}>Save</Button>}
      <Button onClick={handleClose} className="mt-2">
        Close
      </Button>
    </div>
  );
}
