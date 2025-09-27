import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    // 1) Send to Ole Bent (To) and copy Gmail (Cc)
    const { error: adminErr } = await resend.emails.send({
      from: "onboarding@resend.dev", // later: noreply@obrye.global
      to: [{ email: "obrye@obrye.global", name: "Ole Bent Rye" }],
      cc: ["obrye1@gmail.com"],
      reply_to: email,
      subject: `New contact form message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (adminErr) {
      console.error(adminErr);
      return NextResponse.json({ ok: false, error: "Failed to send admin email" }, { status: 500 });
    }

    // 2) Confirmation to the sender
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "We received your message ✅",
      html: `<p>Hi ${name},</p>
             <p>Thanks for reaching out — I’ve received your message and will get back to you soon.</p>
             <p><strong>Your message:</strong></p>
             <blockquote>${String(message).replace(/\n/g, "<br/>")}</blockquote>
             <p>Best regards,<br/>Ole Bent Rye</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
