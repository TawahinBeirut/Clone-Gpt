import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

type UserBarProps = {
    UserName:string
}   

const UserBar = ({UserName}: UserBarProps) =>{

    const Router = useRouter();

    return(
        <div className="border border-black h-screen p-5 bg-white flex flex-col gap-32">
            <h1 className="text-xl">Welcolme {UserName}</h1>
            {/* Profile Image pour la suite */}
            <button className="border border-black text-xl p-5 rounded-xl">Add API Key</button>
            <button onClick={() =>{signOut({callbackUrl:"/registration"})}} className="border border-black text-xl text-red-600 p-5 rounded-xl">Disconnect</button>
        </div>
    )
}

export {UserBar}