import { cn } from "@/lib/utils";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  className?: string;
}

function ThemedCard({ children, className }: Props) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 bg-gray-800/40 border border-gray-700 shadow-md transition-transform hover:shadow-lg",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ThemedCard;
