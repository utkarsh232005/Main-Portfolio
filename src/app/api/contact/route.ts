import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message, name } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "utkarshpatrikar71@gmail.com",
        pass: "dylt pbcp geqi ssth",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "contact.form@utkarshpatrikar.tech",
      to: "utkarshpatrikar@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>Checkout the new contact form submission:</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new NextResponse("Successfully mailed!", {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Mailing was Unsuccessfull!", {
      status: 500,
    });
  }
}
