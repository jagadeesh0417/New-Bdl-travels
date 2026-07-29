import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_XXXXXXXXXXXXXXXX",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "test_secret",
});

export async function POST(req: Request) {
  try {
    const { amount, vehicle } = await req.json();
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: "INR",
      receipt: `bdl_${Date.now()}`,
      notes: { vehicle },
    });
    return NextResponse.json({ orderId: order.id, amount: order.amount });
  } catch {
    return NextResponse.json({ error: "Order creation failed" }, { status: 500 });
  }
}
