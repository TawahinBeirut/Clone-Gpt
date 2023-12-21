"use client"

import Img from "@/../public/urangUtan.png"
import Img2 from "@/../public/Logo-Jasser-GPT.png"
import { useState } from "react"
import { LoginComp } from "@/components/LoginComp"

export default function Home() {
  const [isLogin,setLoginComp] = useState<boolean>(true);

  return (
    <div className="flex justify-between">
      <img src={Img.src}
      width="650"
      />
      <div className="w-5/6 mt-36">
        <div className="flex justify-center">
        <div className="border-8 border-gray-700 w-4/6 text-center rounded-xl p-4">
        <div className="flex justify-center"><img 
        src={Img2.src}
        width="150"
        className="-mt-24"
        />
        </div>
        <LoginComp isLogin={isLogin}/>
        </div>
        </div>
        <div className="flex justify-center mt-5"><p className="text-blue-500 underline" onClick={() =>   setLoginComp(!isLogin)}>Non connecté ? Clique ici</p></div>
      </div>
    </div>
  )
}