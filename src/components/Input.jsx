export default function Input({ label, textarea, ...props }) {
  return (
    <div className="flex flex-col">
      <label className="text-2xl">{label}</label>
      {textarea ? (
        <textarea
          {...props}
          className="p-2 border-b-2 border-stone-800 bg-stone-800 bg-opacity-15 rounded-t-md focus:outline-none"
        />
      ) : (
        <input
          {...props}
          className="p-2 border-b-2 border-stone-800 bg-stone-800 bg-opacity-15 rounded-t-md focus:outline-none"
        />
      )}
    </div>
  );
}
