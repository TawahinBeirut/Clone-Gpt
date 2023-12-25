import { PrismaClient } from "@prisma/client";
import { NextRequest,NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function PUT(request: NextRequest){

    const body = await request.json();
    const {email,newApiKey} = body;

    const user = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if (!user){
        return new NextResponse("Utilisateur non trouvé",{status:400})
    }

    const result = await prisma.user.update({
        where:{
            email: email
        },
        data:{
            ApiKey: newApiKey
        }
    })

    if (!result){
        return new NextResponse("Modification de l'Api Key a echoué",{status: 400})
    }

    return new NextResponse("Modification réussie",{status: 200})

}