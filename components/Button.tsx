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
      className={`flex items-center gap-1 rounded-md bg-brand px-4 py-2 text-base font-medium text-white hover:bg-amber-700 lg:px-6 lg:py-3 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
