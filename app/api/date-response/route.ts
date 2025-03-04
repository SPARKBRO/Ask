import { NextResponse } from 'next/server';
import { sendResponseEmail } from '@/utils/email-service';

export async function POST(request: Request) {
  try {
    const { senderEmail, senderName, recipientName, response } = await request.json();

    const emailSent = await sendResponseEmail(
      senderEmail,
      senderName,
      recipientName,
      response
    );

    if (!emailSent) {
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 