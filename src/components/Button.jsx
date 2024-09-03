export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`bg-stone-600 hover:bg-stone-700 text-slate-100 font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
}
