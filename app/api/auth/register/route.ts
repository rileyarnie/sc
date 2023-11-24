import { prisma } from "@/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone_number, first_name, last_name, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { phone_number, first_name, last_name, password: hashedPassword },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return console.log("error", error);
  }
}
