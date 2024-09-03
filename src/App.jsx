import { useState } from "react";
import SideBar from "./components/SideBar";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import NewProject from "./components/NewProject";
import Navbar from "./components/Navbar";

function App() {
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleSideBar = () => {
    setOpenSideBar(!openSideBar);
  };

  return (
    <section className="md:min-h-screen flex flex-col md:flex-row">
      {/* <h1
        onClick={handleSideBar}
        className={`lg:hidden absolute top-2 cursor-pointer transition-all duration-300 ${
          openSideBar ? "left-80" : "left-2"
        }`}
      >
        {openSideBar ? (
          <FaArrowCircleLeft className="w-8 h-8" />
        ) : (
          <FaArrowCircleRight className="w-8 h-8" />
        )}
      </h1> */}

      <Navbar />
      <SideBar openSideBar={openSideBar} />
      <NewProject />
    </section>
  );
}

export default App;
