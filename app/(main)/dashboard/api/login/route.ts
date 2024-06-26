import { auth } from "@/auth";
import prisma from "@/lib/db";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await auth()
  
  let user = await prisma.user.findFirst({
    where: {
      email: session!.user!.email!
    }
  })

  if(!user) {
    user = await prisma.user.create({ 
      data: { 
        email: session?.user?.email!, name: session?.user?.name!
      },
    })
  } 

  const url = new URL("/dashboard", req.url)

  return NextResponse.redirect(url)
}