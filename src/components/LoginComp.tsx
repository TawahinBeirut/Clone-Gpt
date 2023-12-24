
import { Input } from "@/components/ui/input"
import { redirect } from "next/dist/server/api-utils"
import { FormEvent, useState } from "react"
import { useRouter } from "next/router"

type LoginProps = {
    isLogin: boolean
}

const LoginComp = ({isLogin}: LoginProps) => {
    
    
    const router = useRouter()
    const [data,setData] = useState({
      name: '',
      email: '',
      password: ''
    })

    const registerUser = async (e: FormEvent) => {
        e.preventDefault();
        const response = await fetch('/api/register',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({data})
        });

        const userInfo = await response.json()
        console.log(userInfo)
        router.push('/login')
    }


    return (
          
        <form className="flex flex-col gap-5 font-bold" onSubmit={(e) => {registerUser(e)}}>
        {isLogin ? <div className="flex justify-center"><Input className="w-3/6" placeholder="Username" value={data.name} onChange={(e) => {setData({...data,name: e.target.value})}}/></div> : null}
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Email" value={data.email} onChange={(e) => {setData({...data,email:e.target.value})}}/></div>
        <div className="flex justify-center"><Input className="w-3/6" placeholder="Password" onChange={(e) => {setData({...data,password: e.target.value})}}/></div>
        </form>
    )
}

export {LoginComp}