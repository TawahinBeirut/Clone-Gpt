import { useState,useEffect } from "react";

type WindowProps = {
    UserMail : string
}

export default function MainWindow({UserMail}: WindowProps) {

    const [newApiKey, setNewApiKey] = useState<string>("");

  useEffect(() => {
    fetch("/api/GetApiKey", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: UserMail }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => setNewApiKey(res.apiKey));
  }, []);
    return (
        <h1>{newApiKey}</h1>
    )
}