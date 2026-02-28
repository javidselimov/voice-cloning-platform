import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background"> 
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Welcome to the Voice Cloning Platform</h1>
        <p className="text-center text-muted-foreground">
          This is a platform for cloning voices using machine learning. Please sign in to continue.
        </p>
        <div className="flex gap-4">
          <OrganizationSwitcher />
          <UserButton />
        </div>

      </div>
    </div>
  );
}
