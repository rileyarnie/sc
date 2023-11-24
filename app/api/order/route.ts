import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { total_price, customerId, orderItems, customer }: any = body;

    const order = await prisma.order.create({
      data: { orderItems, total_price, customer_id: customer?.id },
    });
    return NextResponse.json(order);
  } catch (error) {
    return console.log("error", error);
  }
}
