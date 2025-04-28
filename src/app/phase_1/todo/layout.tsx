

import { ReactNode } from "react";
import "./../../globals.css";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-muted/50">
      {children}
    </div>
  )
}
