import { useState } from "react";
import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import Navbar from "./components/Navbar";
import NoProjectSelected from "./components/NoProjectSelected";
import DetailProject from "./components/DetailProject";
import ProjectMenuMobile from "./components/ProjectMenuMobile";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [openProject, setOpenProject] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

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

  const handleSelectDetailProject = (project) => {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: project.id,
    }));
    setSelectedProject(project);
  };

  console.log(selectedProject);

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
      <Navbar
        handleStartProject={handleStartProject}
        projects={projectState.projects}
        setOpenProject={setOpenProject}
      />
      <SideBar
        handleStartProject={handleStartProject}
        projects={projectState.projects}
        handleSelectDetailProject={handleSelectDetailProject}
      />

      {/* PROJECT MENU */}
      {openProject && (
        <ProjectMenuMobile
          projectState={projectState}
          setOpenProject={setOpenProject}
          handleSelectDetailProject={handleSelectDetailProject}
        />
      )}

      {/* PROJECT DETAILS */}
      {content ? (
        content
      ) : (
        <div className="">
          {selectedProject && projectState.selectedProjectId !== null && (
            <DetailProject
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
              setProjectState={setProjectState}
            />
          )}
        </div>
      )}
    </section>
  );
}

export default App;
