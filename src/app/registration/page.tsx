"use client"

import Img from "@/../public/urangUtan.png"
import Img2 from "@/../public/Logo-Jasser-GPT.png"
import { useState } from "react"
import { LoginGoogle } from "@/components/GoogleLogin"

export default function Home() {

  return (
    <div className="flex justify-between">
      <img src={Img.src}
      width="650"
      />
      <div className="w-5/6 mt-36 p-16">
        <div className="flex justify-center">
        <div className="border-2 border-gray-700 drop-shadow-2xl w-4/6 text-center rounded-xl p-4">
        <div className="flex justify-center"><img 
        src={Img2.src}
        width="150"
        className="-mt-24"
        />
        </div>
        <div className="flex justify-center"><LoginGoogle/></div>
        </div>
        </div>
      </div>
    </div>
  )
}