import Chat from "./Chat";


export default function ChatWindow(){
    return (
        <div className="flex justify-center pl-7 h-full overflow-y-scroll-custom">
        <div className="w-screen flex flex-col gap-7 p-3">
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </div>
        </div>
    )
}