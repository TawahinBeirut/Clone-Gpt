import { useState,useEffect, useContext } from "react";
import { PageContext } from "@/app/page";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatInput from "./ChatInput";
export default function MainWindow() {

  const [newApiKey, setNewApiKey] = useState<string>("");
  const {ApiKey} = useContext(PageContext);
  
    return (
      <div className="h-screen overflow-hidden">
        <h1>Votre Api Key Actuelle : {ApiKey}</h1>
        <div className=" h-full flex flex-col justify-end pb-8 gap-5">
          
        <ChatWindow/>
        <ChatInput/>
        {/* Fenetre de Chat */}
        {/* Créer un historique de chats */}
        </div>
      </div>
    )
}