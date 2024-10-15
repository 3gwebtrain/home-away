"use client";
import { useToast } from "@/hooks/use-toast";
import { SignOutButton } from "@clerk/nextjs";

export default function SignOutLink(): JSX.Element {
  const { toast } = useToast();
  const handleLogout = () => {
    toast({ description: "You have been signed out!" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button
        onClick={handleLogout}
        className="w-full text-left"
      >
        Logout
      </button>
    </SignOutButton>
  );
}
