import { IconPointFilled, IconSparkles2Filled } from "@tabler/icons-react";
import React from "react";
import { cn } from "../../lib/utils";

export const ListItem = ({ heading, lists = [], className }) => {
  return (
    <div className={cn(className)}>
      {heading && (
        <h3 className="text-base font-bold flex items-center">
          <IconSparkles2Filled className="mr-2 size-4" /> {heading}
        </h3>
      )}
      <ul className="flex flex-col text-muted-foreground">
        {lists.map((list, idx) => (
          <li
            key={idx}
            className="relative text-sm flex items-center gap-2 py-4.5 border-b border-muted-foreground/10"
          >
            <IconPointFilled
              className="absolute top-1/2 left-0 transform -translate-y-1/2 text-muted-foreground"
              size={12}
            />

            <span className="ml-4.5">{list}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
