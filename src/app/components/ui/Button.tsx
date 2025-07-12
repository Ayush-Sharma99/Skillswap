export function Button({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`rounded-full bg-blue-600 px-4 py-2 text-white font-medium hover:bg-blue-700 transition-colors ${className || ''}`}
      {...props}
    >
      {children}
    </button>
  );
}