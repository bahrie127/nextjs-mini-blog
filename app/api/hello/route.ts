import { time } from "console";
import { NextResponse } from "next/server"; 

export async function GET() {
    return NextResponse.json({ message: "Hello, this is a simple API endpoint.", 
        timestamp: new Date().toISOString(), });
}

export async function POST(request: Request) {
    const body = await request.json();
    return NextResponse.json({ message: "Data received successfully.", 
        receivedData: body,
        status: 'Ok', 
        timestamp: new Date().toISOString(), });
}