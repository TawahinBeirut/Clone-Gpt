import { ChatProps } from "@/lib/utils"

export default function Chat({User,Text}: ChatProps){
    return(
    <div className=" p-5 w-96 drop-shadow-xl rounded-xl bg-white break-words">
        <h1>{User}</h1>
        <p>{Text}</p>
    </div>
    )
}