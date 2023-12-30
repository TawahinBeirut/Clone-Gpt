import { useState,useEffect, useContext } from "react";
import ChatWindow from "./ChatWindow/ChatWindow";
import ChatInput from "./ChatInput";
import { ChatProps ,PageContext} from "@/lib/utils";
import { AskRequest } from "@/lib/openAiRequests";
import toast from "react-hot-toast";
import { RequestType } from "@/lib/utils";

export default function MainWindow() {

  const {Name} = useContext(PageContext);

  const [newApiKey, setNewApiKey] = useState<string>("");
  const {ApiKey} = useContext(PageContext);
  const [ChatsList,setChatsList]  = useState<ChatProps[]>([]);
  const [loading,setLoading] = useState<boolean>(false);

  const addResponse = async(Text:string,tmpchat:ChatProps,mode:string) => {
    setLoading(true);
    let tpmResponse:ChatProps|null = null;
    const result = await AskRequest({apiKey:ApiKey || "",prompt:Text,type:mode})
    
    if (result instanceof Error){
      toast.error("tg");
      tpmResponse = {User: "Jasser",Text: result.message,mode: RequestType.CHAT}
    }
    else{
      if (result === null){
        toast.error("Reponse nulle");
      }
      else{
      tpmResponse = {User:"Jasser",Text:result || "Requete echouée, raison inconnue",mode};
      }
    }
    if (tpmResponse)setChatsList([...ChatsList,tmpchat,tpmResponse])
    setLoading(false);
  }

  const addChat = async(Text: string,mode: string) => {
    let tmpchat: ChatProps = {User:Name || "",Text:Text,mode:RequestType.CHAT};
    setChatsList([...ChatsList,tmpchat]);
    addResponse(Text,tmpchat,mode);
  }
  
    return (
      <>
      <div className="h-screen overflow-hidden">
        <div className=" h-full flex flex-col justify-end pb-4 gap-5">
        <ChatWindow ChatsList={ChatsList} loading={loading}/>
        <ChatInput addChat={addChat}/>
        {/* Fenetre de Chat */}
        {/* Créer un historique de chats */}
        </div>
      </div>
      </>
    )
}