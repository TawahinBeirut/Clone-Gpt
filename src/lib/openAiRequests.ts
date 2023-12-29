import OpenAI, { AuthenticationError, BadRequestError } from "openai";
import { OpenAIError } from "openai/error.mjs";
import toast from "react-hot-toast";
import { RequestType } from "./utils";

type AskProps = {
    apiKey: string,
    prompt: string,
    type: string
}

const AskRequest = async({apiKey,prompt,type}: AskProps)=> {
    if (apiKey.trim().length === 0 || prompt.trim().length === 0){
        return new Error("ApiKey vide")
    }
    const openai = new OpenAI({apiKey: apiKey,dangerouslyAllowBrowser: true});
    let result;
    console.log(prompt)
    try{
        switch(type){
            case RequestType.CHAT:
                let completion = await openai.chat.completions.create({
                messages: [{role:"user",content: prompt}],
                model: "gpt-4",
                })
                result = completion.choices[0].message.content
                break;
            case RequestType.IMAGE:
                const image = await openai.images.generate({
                    prompt: prompt,
                    n: 1,
                    size:"1024x1024",
                    model:"dall-e-3"
                })
                result = image.data[0].url;
                break;
            default:
                result = "";
                 break; 
        }
        
    }
    catch(e){
        if (e instanceof AuthenticationError){
            return  new Error(e.code || "Erreur d'auth non reconue");
        }
        if (e instanceof BadRequestError){
            return new Error("Ahchem Akhy on est woke ici fais du politiquement correct")
        }
        return new Error(JSON.stringify(e))
    }
    return result;
}

export {AskRequest}