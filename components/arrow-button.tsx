import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

interface Props {
  label: string;
  href: string;
}

function ArrowButton({ label, href }: Props) {
  return (
    <Button variant="outline" size="lg" asChild>
      <Link href={href} className="group text-blue-400 hover:text-blue-500">
        {label}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </Button>
  );
}

export default ArrowButton;
