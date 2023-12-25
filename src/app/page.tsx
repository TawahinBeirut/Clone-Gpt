"use client"
import { useSession } from "next-auth/react"
import { UserBar } from "@/components/UserBar";

export default function Home() {
  const {data: session,status} = useSession();  

  if (status === "authenticated" && session.user?.name) {
    return (
      <div className="flex">  
        <UserBar UserName={session.user.name}/>
      </div>
    )
  }


  return <a href="/registration">Sign in</a>

}
