import { NextRequest,NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: NextRequest){

    const body = await request.json();
    const {email} = body;

    const ApiKey = await prisma.user.findUnique({
        where:{
            email: email
        }
    })

    if (!ApiKey){
        return new NextResponse("Utilisateur non trouvé",{status: 400})
    }
    return NextResponse.json({apiKey: ApiKey.ApiKey});
}