import { ChatProps, RequestType } from "@/lib/utils"

export default function Chat({User,Text,mode}: ChatProps){
    return(
    <div className=" p-5 w-96 drop-shadow-xl rounded-xl bg-white break-words">
        <h1>{User}</h1>
        { (mode=== RequestType.CHAT) ? <p>{Text}</p> : <img src={Text} width="1024"/>}
    </div>
    )
}