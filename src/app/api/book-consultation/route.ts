import { NextRequest, NextResponse } from 'next/server';

const AIRTABLE_BASE_ID = 'appIw3Aizj05DKShU';
const AIRTABLE_TABLE_ID = 'tblNSo0SKEQlTaRGU';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, program, destination, message } = body;

    if (!name || !email || !program) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, program.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.AIRTABLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'Airtable API key is not configured.' },
        { status: 500 }
      );
    }

    const submittedAt = new Date().toLocaleString('en-GB', {
      timeZone: 'UTC',
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Full Name': name,
            'Email': email,
            'Phone': phone || '',
            'Program Interest': program,
            'Destination': destination || '',
            'Message': message || '',
            'Submitted At': submittedAt,
          },
        }),
      }
    );

    if (!response.ok) {
      const errData = await response.json();
      const errMsg = errData?.error?.message || 'Airtable API error';
      throw new Error(errMsg);
    }

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Booking form submission error:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
