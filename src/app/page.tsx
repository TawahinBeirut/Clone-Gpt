"use client"
import { useSession } from "next-auth/react"
import { UserBar } from "@/components/UserBar";
import { useEffect, useState,createContext,useReducer, useContext} from "react";
import toast from "react-hot-toast";
import MainWindow from "@/components/MainWindow";
import { PageContextType , RequestType,PageContext} from "@/lib/utils";

export default function Home() {
  const {data: session,status} = useSession(); 
  const [changed,setChanged] = useState<boolean>(false);

  const [User,setUser]= useState<PageContextType>({
    Name: session?.user?.name || null,
    Email: session?.user?.email || null,
    ApiKey: null,
    change(arg0) {
      setChanged(arg0);
    }
    })


  useEffect(() => {
    if (status === "authenticated" && session.user?.name && session.user?.email){
    fetch("/api/GetApiKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session.user.email}),
    })
      .then((res) => {
        return res.json();
      })
    .then((res) => {
      setUser({...User,Name:session.user?.name || null,Email:session.user?.email || null,ApiKey : res.apiKey})
    })
    .catch((err) => console.log(JSON.stringify(err)))
  }  
  else{
    console.log("oe")
  } 
  }, [status,changed]);

  if (status === "authenticated" && session.user?.name && session.user.email) {
    
    return (
      <div className="flex">
        <PageContext.Provider value={User}>
        <UserBar/>
        <MainWindow/>
        </PageContext.Provider>
      </div>
    )
  }

  if (status === "loading"){
    return (
      <h1 className="text-xl">...</h1>
    )
  }


  return <a href="/registration" className="text-blue-700 selection:bg-pink-300">Sign in</a>

}
