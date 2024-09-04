import { FaPlus } from "react-icons/fa";
import Button from "./Button";
import { useState } from "react";

export default function Navbar({ handleStartProject, setOpenProject }) {
  return (
    <nav className="flex flex-col justify-between items-center p-4 md:hidden">
      <h1 className="text-4xl">Project Pulse</h1>

      <div className="flex gap-x-4">
        <Button className="flex mt-0 md:mt-5" onClick={handleStartProject}>
          + Add Project
        </Button>
        <Button className={"mt-0 md:mt-5"} onClick={() => setOpenProject(true)}>
          See Project
        </Button>
      </div>
    </nav>
  );
}
