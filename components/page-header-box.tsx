import Aurora from "@/components/Aurora";
import { PropsWithChildren } from "react";

export function PageHeaderBox({ children }: PropsWithChildren) {
  const color1 = "#155dfc";
  const color2 = "#B19EEF";
  const color3 = "#5227FF";
  return (
    <section className="md:h-[600px] relative">
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={[color1, color2, color3]} />
      </div>
      <div className="container mx-auto px-4 py-30 md:py-36 lg:py-40">
        {children}
      </div>
    </section>
  );
}
