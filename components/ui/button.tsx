export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="bg-accent px-8 py-4 text-small uppercase tracking-wide text-primary hover:opacity-90 transition"
      {...props}
    >
      {children}
    </button>
  )
}
