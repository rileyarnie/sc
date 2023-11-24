import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const allProducts = await prisma.product.findMany();

    return NextResponse.json(allProducts);
  } catch (error) {
    return console.log("error", error);
  }
}
