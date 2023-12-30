import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
import { AddApiKeyComp } from "./AddApiKey"
import Img from "@/../public/urangUtan.png"
import { useContext } from "react"
import { PageContext } from "@/lib/utils"
import ChooseModel from "./ChooseModel"

type UserBarProps = {
    UserName:string
    UserMail: string
}   

const UserBar = () =>{

    const {Email,Name,ApiKey} = useContext(PageContext);

    return(
        <div className="border border-black h-screen p-5 bg-white flex flex-col gap-16">
            <div className="text-center overflow-hidden max-w-44">
            <img src={Img.src} width="175px"></img>
            <h1 className="text-xl">{Name}</h1>
            <h1>Votre Api Key : {ApiKey}</h1>
            </div>
            {/* Profile Image pour la suite */}
            <AddApiKeyComp/>
            <button onClick={() =>{signOut({callbackUrl:"/registration"})}} className="border border-black text-xl text-red-600 p-5 rounded-xl">Disconnect</button>
        </div>
    )
}

export {UserBar}