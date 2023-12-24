'use client'

import { SessionProvider } from "next-auth/react"
import { ReactElement } from "react"
import { Session } from "next-auth"

type ProviderOptons = {
    children: ReactElement
}

export default function Provider({children}:ProviderOptons){
    return(
        <SessionProvider>
            {children}
        </SessionProvider>  
    )
}