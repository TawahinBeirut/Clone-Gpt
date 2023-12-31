import { useState } from "react"
import toast from "react-hot-toast";
import ChooseModel from "./ChooseModel";
import { RequestType } from "@/lib/utils";

export default function ChatInput({addChat}: any){
  const [prompt,setPrompt] = useState<string>("");
  const [mode,setMode] = useState<string>(RequestType.CHAT);

  const clear = () => {
    if (prompt.trim().length !== 0){
    addChat(prompt,mode);
    setPrompt("");
    }
    else{
    toast.error("Prompt vide (pd)")
    }
  }

    return(
    <div className="flex justify-start pl-2 gap-4">
      
    <div className="flex flex-col gap-2 text-center">
    <ChooseModel position={mode} setPosition={setMode}/>
    {(mode === RequestType.CHAT) ? "Chat" : "Image"}
    </div>
    <div className="bg-gray-300 p-2 rounded-xl flex items-center w-8/12">
  <textarea placeholder="Message Jasser-GPT..." className="bg-transparent outline-none text-gray-800 placeholder-gray-800 flex-1 break-words" value={prompt} onChange={(e) => {setPrompt(e.target.value)}}/>
  <button onClick={() => clear()} className="ml-4 bg-gray-600 text-white p-2 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </button>
</div>
</div>
    )
}