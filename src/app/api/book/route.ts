import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend('re_your_api_key_here');

export async function POST(req: Request) {
  try {
    const { fullName, email, phone, service, timeSlot } = await req.json();

    // Send to Admin
    await resend.emails.send({
      from: 'SAS Website <onboarding@resend.dev>',
      to: 'admin@sas.tn',
      subject: `New Booking: ${service}`,
      html: `<h3>New Reservation</h3><p><b>Name:</b> ${fullName}</p><p><b>Phone:</b> ${phone}</p><p><b>Time:</b> ${timeSlot}</p>`
    });

    return NextResponse.json({ message: "Success" });
  } catch (err) {
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}