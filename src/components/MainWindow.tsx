import { useState,useEffect, useContext } from "react";
import { PageContext } from "@/app/page";
export default function MainWindow() {

  const [newApiKey, setNewApiKey] = useState<string>("");
  const {ApiKey} = useContext(PageContext);
  
    return (
      <>
        <h1>{ApiKey}</h1>
        {/* Chat Window // Tester quand ya mille messages */}
        {/* Fenetre de Chat */}
        {/* Créer un historique de chats */}
      </>
    )
}