import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaDotCircle } from "react-icons/fa";

export default function Accordion({
  title,
  content,
}: Readonly<{
  title: string;
  content: React.ReactNode;
  [key: string]: any;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-500" data-aos="fade-up">
      <button
        className="flex w-full items-center justify-between p-4 text-left text-lg font-semibold focus:outline-none md:text-xl lg:text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="flex items-center gap-8">
          <FaDotCircle size={10} />
          <h3 className="font-medium">{title}</h3>
        </span>
        <span>{isOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
      </button>

      {isOpen && (
        <div
          data-aos="fade-down"
          className="px-2 pb-4 text-base md:text-lg lg:text-xl"
        >
          {content}
        </div>
      )}
    </div>
  );
}
