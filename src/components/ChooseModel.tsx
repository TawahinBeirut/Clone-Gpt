import chooseIcon from "@/../public/icons8-choose-16.png";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useContext, useEffect, useState } from "react";
import { RequestType } from "@/lib/utils";
import { PageContext } from "@/app/page";
 
type ChooseProps = {
    position: string,
    setPosition:any
}

export default function ChooseModel({position,setPosition}: ChooseProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="mt-3"><img src={chooseIcon.src}/></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-gray-200 rounded-xl">
        <DropdownMenuLabel>Choisis un mode</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value={RequestType.CHAT}>Chat</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={RequestType.IMAGE}>Image</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}