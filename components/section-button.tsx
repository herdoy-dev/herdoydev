import { PropsWithChildren } from "react";

function SectionButton({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-blue-400">
      {children}
    </span>
  );
}

export default SectionButton;
