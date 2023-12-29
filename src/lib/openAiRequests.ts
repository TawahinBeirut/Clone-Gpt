import OpenAI, { AuthenticationError } from "openai";
import { OpenAIError } from "openai/error.mjs";
import toast from "react-hot-toast";

type AskProps = {
    apiKey: string,
    prompt: string
}

const AskRequest = async({apiKey,prompt}: AskProps)=> {
    if (apiKey.trim().length === 0 || prompt.trim().length === 0){
        return new Error("ApiKey vide")
    }
    const openai = new OpenAI({apiKey: apiKey,dangerouslyAllowBrowser: true});
    let completion;
    console.log(prompt)
    try{
        completion = await openai.chat.completions.create({
            messages: [{role:"user",content: prompt}],
            model: "gpt-3.5-turbo",
        })
    }
    catch(e){
        if (e instanceof AuthenticationError){
            return  new Error(e.code || "Erreur d'auth non reconue");
        }
        return new Error(JSON.stringify(e))
    }
    console.log(prompt,JSON.stringify(completion))
    return completion.choices[0].message.content;
}

export {AskRequest}