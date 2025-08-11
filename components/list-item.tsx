import Link from "next/link";
import { ReactNode } from "react";
import ThemedIcon from "./themed-icon";

interface Props {
  description?: string;
  icon: ReactNode;
  title: string;
  linkTitle?: string;
  link?: string;
  iconSize?: number;
}

function ListItem({
  icon,
  title,
  description,
  linkTitle,
  link,
  iconSize,
}: Props) {
  return (
    <div className="flex items-start gap-4">
      <ThemedIcon size={iconSize}>{icon}</ThemedIcon>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-400">{description}</p>
        {linkTitle && link && (
          <Link className="text-primary" href={link}>
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}

export default ListItem;
