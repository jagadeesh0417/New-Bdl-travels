import { NextResponse } from "next/server";

const bookings: Record<string, unknown>[] = [];

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const booking = {
      id: data.id || `AKR${Date.now().toString(36).toUpperCase()}`,
      ...data,
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    bookings.unshift(booking);
    return NextResponse.json({ success: true, booking });
  } catch {
    return NextResponse.json({ error: "Failed to save booking" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ bookings });
}
