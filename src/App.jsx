import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import Navbar from "./components/Navbar";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartProject = () => {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    setProjectState((prevState) => {
      const newProject = {
        ...projectData,
        id: Math.random().toString(),
      };
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelProject = () => {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  };

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartProject={handleStartProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        handleCancelProject={handleCancelProject}
        handleAddProject={handleAddProject}
      />
    );
  }

  return (
    <section className="md:min-h-screen flex flex-col md:flex-row gap-10">
      <Navbar />
      <SideBar
        handleStartProject={handleStartProject}
        projects={projectState.projects}
      />
      {content}
    </section>
  );
}

export default App;
