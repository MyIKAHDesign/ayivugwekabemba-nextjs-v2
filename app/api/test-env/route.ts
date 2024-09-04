import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    emailUser: process.env.EMAIL_USER ? 'Set' : 'Not set',
    emailPass: process.env.EMAIL_PASS ? 'Set' : 'Not set'
  });
}
