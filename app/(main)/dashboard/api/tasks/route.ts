import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";
import { auth } from "@/auth";

export async function POST(req: Request) {
  const formData = await req.json()
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      email: session!.user!.email!     
    }
  })

  await prisma.task.create({ data: { ...formData, status: "Not Done", userId: user!.id } })

  return NextResponse.json("hello")
}