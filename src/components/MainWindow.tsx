import { useState,useEffect, useContext } from "react";
import { PageContext } from "@/app/page";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatInput from "./ChatInput";
import { ChatProps } from "@/lib/utils";

export default function MainWindow() {

  const {Name} = useContext(PageContext);

  const [newApiKey, setNewApiKey] = useState<string>("");
  const {ApiKey} = useContext(PageContext);
  const [ChatsList,setChatsList]  = useState<ChatProps[]>([]);

  const addChat = (Text: string) => {
    let tmpchat: ChatProps = {User:Name || "",Text:Text};
    setChatsList([...ChatsList,tmpchat])
  }
  
    return (
      <div className="h-screen overflow-hidden">
        <div className=" h-full flex flex-col justify-end pb-4 gap-5">
          
        <ChatWindow ChatsList={ChatsList}/>
        <ChatInput addChat={addChat}/>
        {/* Fenetre de Chat */}
        {/* Créer un historique de chats */}
        </div>
      </div>
    )
}