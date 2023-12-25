"use client"
import { useSession } from "next-auth/react"
import { UserBar } from "@/components/UserBar";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const {data: session,status} = useSession(); 

  if (status === "authenticated" && session.user?.name && session.user.email) {

    return (
      <div className="flex">  
        <UserBar UserName={session.user.name} UserMail={session.user.email}/>
      </div>
    )


  }


  return <a href="/registration">Sign in</a>

}
