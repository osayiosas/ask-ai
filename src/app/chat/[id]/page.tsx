import { auth } from "@/auth";
import { ChatBox } from "@/components/chatbox";
import { redirect } from "next/navigation";

export default async function SignlePage() {
  const session = await auth();

  return (
    <>
      {session && session.user ? <ChatBox session={session} /> : redirect("/")}
    </>
  );
}
