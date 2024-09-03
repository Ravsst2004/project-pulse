import Button from "./Button";
import Input from "./Input";

export default function NewProject() {
  return (
    <div className="w-[90%] md:w-1/2 2xl:w-1/3 mx-auto md:mx-0 my-6">
      <menu className="flex justify-end gap-2">
        <li>
          <Button>Cancel</Button>
        </li>
        <li>
          <Button>Save</Button>
        </li>
      </menu>

      <div className="flex flex-col gap-4 ">
        <Input label="title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
      </div>
    </div>
  );
}
