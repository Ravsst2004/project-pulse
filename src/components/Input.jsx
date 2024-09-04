import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, textarea, className, ...props },
  ref
) {
  let classes = `p-2 border-b-2 border-stone-800 bg-stone-800 bg-opacity-15 rounded-t-md focus:outline-none ${className}`;

  return (
    <div className="flex flex-col">
      <label className="text-2xl">{label}</label>
      {textarea ? (
        <textarea {...props} ref={ref} className={classes} />
      ) : (
        <input {...props} ref={ref} className={classes} />
      )}
    </div>
  );
});

export default Input;
