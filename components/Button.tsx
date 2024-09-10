export default function Button({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}>) {
  return (
    <button
      className={`flex items-center gap-1 rounded-md bg-brand px-6 py-3 text-base font-medium text-white hover:bg-amber-700 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
