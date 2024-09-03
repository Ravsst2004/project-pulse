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

  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected handleStartProject={handleStartProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = <NewProject />;
  }

  return (
    <section className="md:min-h-screen flex flex-col md:flex-row gap-10">
      <Navbar />
      <SideBar handleStartProject={handleStartProject} />
      {content}
    </section>
  );
}

export default App;
