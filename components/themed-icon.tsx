import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: number;
  className?: string;
}

function ThemedIcon({ children, size = 10, className }: Props) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-gray-900",
        className && className
      )}
      style={{
        width: size * 5,
        height: size * 5,
      }}
    >
      {children}
    </div>
  );
}

export default ThemedIcon;
