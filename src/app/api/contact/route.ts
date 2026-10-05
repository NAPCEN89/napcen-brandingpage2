import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Configure this with your actual SMTP credentials
    // You should put these in your .env.local file
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, 
        pass: process.env.SMTP_PASS, 
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER || 'no-reply@napcen.com',
      to: process.env.SMTP_USER || 'marketing@napcen.com',
      subject: 'New Inquiry from NAPCEN Website',
      text: `
Name: ${data.name}
Company: ${data.company}
Email: ${data.email}
Phone: ${data.phone}
Scrubber / Duty: ${data.scrubber}
Pollutant: ${data.pollutant}
Airflow: ${data.airflow}
Temperature and Application: ${data.description}
      `,
    };

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.warn("SMTP credentials not configured. Form data:", data);
      // If credentials are not set, return success so the frontend UI can be tested.
      // The email will NOT actually be sent until you set SMTP_USER and SMTP_PASS.
      return NextResponse.json({ success: true, message: "Logged (SMTP not configured)" });
    }

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
