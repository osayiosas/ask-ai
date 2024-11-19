import React from "react";
import { SidebarTrigger } from "./sidebar";
import { Link } from "lucide-react";
import { ModeToggle } from "../mood_toggler";

export const Header = () => {
  return (
    <header className="bg-background border-b p4 flex items-center justify-between">
      <SidebarTrigger className="block md:hidden mr-4" />
      <Link href="/chat">
        <h1 className="text-x1 font-bold">Ask GPT</h1>
      </Link>
      <ModeToggle />
    </header>
  );
};
