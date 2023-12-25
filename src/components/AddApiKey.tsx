import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { Button } from "./ui/button";
import { FormEvent, useEffect, useState } from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import toast from "react-hot-toast";

type ExistingProps = {
  UserMail: string;
};
const AddApiKeyComp = ({ UserMail }: ExistingProps) => {
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

  const onSave = async () => {
    let result = await fetch("api/EditApiKey", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: UserMail, newApiKey: newApiKey }),
    });
    if (result.status === 200) {
      toast.success("Api Key Bien modifiée");
    } else {
      toast.error("IHOUDI");
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <button className="border border-black text-xl p-5 rounded-xl">
          Add API Key
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] text-white">
        <DialogHeader>
          <DialogTitle>Ajoutez ou modifiez votre Api Key</DialogTitle>
          <DialogDescription>
            L'API key est celle que tu va utiliser pour payer tes requetes à
            chat GPT pd: voici un lien : pluis tard
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Api-Key :
          </Label>
          <Input
            id="name"
            className="col-span-3 text-white"
            onChange={(e) => setNewApiKey(e.target.value)}
            value={newApiKey ? newApiKey : ""}
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={() => onSave()}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export { AddApiKeyComp };
