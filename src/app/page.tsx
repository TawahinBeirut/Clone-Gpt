"use client"
import { useSession } from "next-auth/react"

export default function Home() {
  const {data: session,status} = useSession();

  return(
    <h1>{JSON.stringify(session)}</h1>
  )
}
