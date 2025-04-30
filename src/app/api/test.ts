// app/api/test/route.ts (for testing purposes)
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello World!' });
}
