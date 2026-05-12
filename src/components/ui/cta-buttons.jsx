import React from "react";

import { IconArrowDown } from "@tabler/icons-react";
import { Button } from "./button";

export const CtaButtons = () => {
  return (
    <div className="flex items-center gap-6">
      <Button
        variant="primary"
        className="h-12 bg-white text-black rounded-full px-6"
      >
        Let's Talk
      </Button>
      <Button
        variant="outline"
        className="h-12 rounded-full bg-card-foreground border border-white/50 text-white px-6"
      >
        Download CV <IconArrowDown />
      </Button>
    </div>
  );
};
