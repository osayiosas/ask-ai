import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import { GitBranchIcon } from "lucide-react";

export default function Home() {
  return (
    <>
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
            "use server"
            await signIn("github");
          }}
          className="flex items-center justify-center py-4">
            <Button className="w-full max-w-sm" variant="outline">
              <GitBranchIcon className="w-2 size-4" />
              Sign in with Github
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
