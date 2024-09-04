import { useRef, useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ handleAddProject, handleCancelProject }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modalDialog = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim().length === 0 &&
      enteredDescription.trim().length === 0 &&
      enteredDueDate.trim().length === 0
    ) {
      modalDialog.current.open();
      return;
    }

    handleAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[90%] md:w-1/2 2xl:w-1/3 mx-auto md:mx-0 my-6">
      <Modal ref={modalDialog}>
        <p className="text-red-500 text-xl  md:text-2xl">
          Please fill in the required fields
        </p>
      </Modal>

      <menu className="flex justify-end gap-2">
        <li>
          <Button onClick={handleCancelProject}>Cancel</Button>
        </li>
        <li>
          <Button onClick={handleSave}>Save</Button>
        </li>
      </menu>

      <div className="flex flex-col gap-4 ">
        <Input type="text" label="title" ref={title} />
        <Input type="text" label="Description" ref={description} textarea />
        <Input type="date" label="Due Date" ref={dueDate} />
      </div>
    </div>
  );
}
