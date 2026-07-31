import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const GOOGLE_SHEETS_URL =
  "https://script.google.com/macros/s/AKfycbyTZMT0GvvhvEezE2_n89vobNVvWXEe1jIFqr6f2bz5tHMSzO5gWanZe_oOL7H0gH52/exec";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const {
      name,
      email,
      company,
      service,
      message,
    } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email and message are required.",
      });
    }

    // 1. Save lead to Google Sheets
    const sheetResponse = await fetch(GOOGLE_SHEETS_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        company,
        service,
        message,
      }),
    });

    const sheetResult = await sheetResponse.json();

    if (!sheetResult.success) {
      console.error("Google Sheets error:", sheetResult);
    }

    // 2. Send email through Resend
    const emailResult = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.CONTACT_EMAIL,
      subject: `New Nirmora Contact - ${name}`,
      html: `
        <h2>New Nirmora Contact Form Submission</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not provided"}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("Email result:", emailResult);

    return res.status(200).json({
      success: true,
      message: "Your message has been sent successfully!",
      savedToSheet: sheetResult.success === true,
    });

  } catch (error) {
    console.error("Contact form error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}