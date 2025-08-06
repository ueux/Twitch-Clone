import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex ">
      <h1>Dashboard</h1>
      <UserButton afterSwitchSessionUrl="/"/>
    </div>
  );
}
