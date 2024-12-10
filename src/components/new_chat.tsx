"use client";

import { User } from "next-auth";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { db } from "@/lib/firebase";

import { SidebarMenuButton } from "./ui/sidebar";

export const NewChat = ({ user }: { user: User }) => {
  const router = useRouter();

  const createNewChat = async () => {
    if (!user.email) {
      throw new Error("User email is required");
    }
    const doc = await addDoc(collection(db, "users", user.email, "chats"), {
      userId: user.email,
      createdAt: serverTimestamp(),
    });

    router.push(`/chat/${doc.id}`);
  };
  return (
    <SidebarMenuButton asChild>
      <Button onClick={createNewChat} variant="outline" className="w-full">
        <PlusIcon className="mr-2 size-4" /> New Chat
      </Button>
    </SidebarMenuButton>
  );
};
