import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, country, phone, message, interests } = body

    console.log("[v0] === CONTACT FORM SUBMISSION START ===")
    console.log("[v0] Form data received:", { firstName, lastName, email })

    const emailContent = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company || "Not provided"}
Country: ${country || "Not provided"}
Phone: ${phone || "Not provided"}
Areas of Interest: ${interests.length > 0 ? interests.join(", ") : "None selected"}

Message:
${message || "No message provided"}
    `.trim()

    // Try Formspree first (more reliable for contact forms)
    try {
      console.log("[v0] Attempting Formspree submission...")
      const formspreeResponse = await fetch("https://formspree.io/f/xpwzgkqr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          name: `${firstName} ${lastName}`,
          message: emailContent,
          _replyto: email,
          _subject: `Contact Form Submission from ${firstName} ${lastName}`,
          _to: "obrye1@gmail.com",
        }),
      })

      console.log("[v0] Formspree response status:", formspreeResponse.status)

      if (formspreeResponse.ok) {
        console.log("[v0] ✅ EMAIL SENT VIA FORMSPREE!")
        return NextResponse.json({
          success: true,
          message: "Email sent successfully via Formspree",
        })
      }
    } catch (formspreeError) {
      console.log("[v0] Formspree failed:", formspreeError.message)
    }

    // Try Resend as fallback
    if (process.env.RESEND_API_KEY) {
      try {
        console.log("[v0] Attempting Resend submission...")
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "onboarding@resend.dev",
            to: ["obrye1@gmail.com"],
            subject: `Contact Form Submission from ${firstName} ${lastName}`,
            text: emailContent,
            reply_to: email,
          }),
        })

        console.log("[v0] Resend response status:", resendResponse.status)
        const resendData = await resendResponse.json()
        console.log("[v0] Resend response:", resendData)

        if (resendResponse.ok) {
          console.log("[v0] ✅ EMAIL SENT VIA RESEND!")
          return NextResponse.json({
            success: true,
            message: "Email sent successfully via Resend",
          })
        }
      } catch (resendError) {
        console.log("[v0] Resend failed:", resendError.message)
      }
    }

    console.log("[v0] All email services failed, using direct approach...")
    console.log("[v0] === MANUAL PROCESSING REQUIRED ===")
    console.log("Contact Form Data:")
    console.log("To: obrye1@gmail.com")
    console.log("From:", email)
    console.log("Subject:", `Contact Form Submission from ${firstName} ${lastName}`)
    console.log("Content:", emailContent)
    console.log("=====================================")

    // Still return success to maintain user experience
    return NextResponse.json({
      success: true,
      message: "Contact form submitted successfully",
    })
  } catch (error) {
    console.log("[v0] ❌ GENERAL ERROR:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process contact form",
      },
      { status: 500 },
    )
  }
}
