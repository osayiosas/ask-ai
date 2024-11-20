import { auth, signIn } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { GitBranchIcon } from "lucide-react";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  console.log(session);
  return (
    <>
      {session && session.user ? (
        redirect("/chat")
      ) : (
        <Dialog open>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Sign in to your account</DialogTitle>
              <DialogDescription>
                sign in to your account to continue chatting with our assistant
              </DialogDescription>
            </DialogHeader>
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className="flex items-center justify-center py-4"
            >
              <Button
                type="submit"
                className="w-full max-w-sm"
                variant="outline"
              >
                <GitBranchIcon className="mr-2 size-4" />
                Sign in with Github
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
