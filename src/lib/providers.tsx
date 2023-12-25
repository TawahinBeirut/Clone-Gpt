'use client'

import { SessionProvider } from "next-auth/react"
import { ReactElement } from "react"
import { Session } from "next-auth"

import { Toaster } from "react-hot-toast"

type ProviderOptons = {
    children: ReactElement
}

export default function Provider({children}:ProviderOptons){
    return(
        <SessionProvider>
            {children}
            <Toaster/>
        </SessionProvider>  
    )
}