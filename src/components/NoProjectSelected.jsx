import Button from "./Button";

export default function NoProjectSelected({ handleStartProject }) {
  return (
    <div className="w-[90%] md:w-1/2 mx-auto my-20 text-center">
      <h1 className="text-4xl md:text-6xl text-stone-700">
        No Project Selected
      </h1>
      <p className="text-xl md:text-3xl my-2">
        Select a project or create a new one
      </p>
      <Button onClick={handleStartProject} className={"md:text-2xl"}>
        Create Project
      </Button>
    </div>
  );
}
