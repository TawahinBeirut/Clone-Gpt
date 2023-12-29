import { ChatProps } from "@/lib/utils";
import { useRef,useEffect } from "react";
import Chat from "./Chat";

type ChatWindowProps = {
    ChatsList: ChatProps[],
    loading: boolean
}

export default function ChatWindow({ChatsList,loading}: ChatWindowProps){
    const endOfMessagesRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [ChatsList]); 

    return (
        <div className="flex justify-center pl-7 h-full overflow-y-scroll-custom">
        <div className="w-screen flex flex-col gap-7 p-3">
            {ChatsList.map(el => (
                <Chat {...el} />
            ))}
        {loading? "..." : null}
        <div ref={endOfMessagesRef} />
        </div>
        </div>
    )
}