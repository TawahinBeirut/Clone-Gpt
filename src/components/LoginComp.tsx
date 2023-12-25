'use client'

import { Input } from "@/components/ui/input"
import { redirect } from "next/dist/server/api-utils"
import { FormEvent, useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"
import { NextResponse } from "next/server"

type LoginProps = {
    isLogin: boolean
}

const LoginComp = ({isLogin}: LoginProps) => {

    
const router = useRouter();
    const [data,setData] = useState({
      name: '',     
      email: '',
      password: ''
    })  

    const [badEmail,setBadEmail] = useState<boolean>(false)

    const registerUser = async (e: FormEvent) => {
        e.preventDefault()
        try{
            let res = await fetch('/api/register',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },      
            body: JSON.stringify({...data})
        })
        
        setBadEmail(false);
        loginUser(e)
    }
    catch(e){
        setBadEmail(true);
    }
    }
    

    const loginUser = (e: FormEvent) => {
        e.preventDefault()
        signIn('credentials',{
            ...data,
            redirect:false
        });
        router.push('/')
    }


    return (
          
        <form className="flex flex-col gap-5 font-bold" onSubmit={ isLogin ? (e) => {registerUser(e)} : (e) => loginUser(e)}>
        {isLogin ? <div className="flex justify-center"><Input className="w-3/6" placeholder="Username" value={data.name} onChange={(e) => {setData({...data,name: e.target.value})}}/></div> : null}
        {badEmail ? <div className="flex justify-center text-center text-red-700">"Email déjà utilisé"</div>: null}
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Email" value={data.email} onChange={(e) => {setData({...data,email:e.target.value})}}/></div>
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Password" type="password" onChange={(e) => {setData({...data,password: e.target.value})}}/></div>
        <div className="flex justify-center"><button className="border border-black rounded-xl p-3" type="submit">{isLogin ? "Register" : "Login"}</button></div>
        </form>
    )
}

export {LoginComp}