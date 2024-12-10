"use clint";

import { SendIcon } from "lucide-react";
import { Session } from "next-auth";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname } from "next/navigation";

import { useState } from "react";

export const ChatBox = ({ session }: { session: Session }) => {
  const user = session.user;
  const chatId = usePathname().split("/").pop()!;

  const [prompt, setPrompt] = useState("");

  return (
    <>
      {/* chatbox messages */}

      <div className="p-4 border">
        <form className="flex space-x-2">
          <Input
            type="text"
            name="prompt"
            className="flex-grow"
            placeholder="ASK GPT..."
          />
          <Button type="submit" size="icon">
            <SendIcon className="size-5" />
          </Button>
        </form>
      </div>
    </>
  );
};
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}

