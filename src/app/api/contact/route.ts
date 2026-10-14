import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const name = data.name || 'Website Visitor';
    const email = data.email || 'N/A';
    const phone = data.mobile || data.phone || 'N/A';
    const company = data.company || '';
    const product = data.product || data.application || data.equipment || data.scrubber || 'General Inquiry';
    const baseMessage = data.message || data.description || data.desc || '';

    const subject = `New Inquiry: ${product} — NAPCEN`;

    // 1. Direct SMTP via Nodemailer (if credentials are set in .env)
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpUser && smtpPass && smtpUser !== 'your_email@gmail.com') {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.office365.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: Number(process.env.SMTP_PORT) === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const mailContent = `
NEW INQUIRY FROM NAPCEN WEBSITE
==================================
Product / Interested In : ${product}
Full Name               : ${name}
Email Address           : ${email}
Phone / Mobile          : ${phone}
Company                 : ${company || 'N/A'}

Message / Requirements:
${baseMessage || 'N/A'}
==================================
        `;

        await transporter.sendMail({
          from: smtpUser,
          to: process.env.CONTACT_RECEIVER_EMAIL || smtpUser,
          subject: subject,
          text: mailContent,
        });

        return NextResponse.json({ success: true, message: 'Inquiry sent successfully via email' });
      } catch (smtpError) {
        console.error('SMTP Send Error, attempting fallback:', smtpError);
      }
    }

    // 2. Server-side Web3Forms submission (Access key hidden on server, not exposed in browser)
    const ACCESS_KEY = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!ACCESS_KEY) {
      console.error('WEB3FORMS_ACCESS_KEY is not configured in .env');
      return NextResponse.json({ error: 'Server configuration error: missing form access key' }, { status: 500 });
    }

    const extraDetails: string[] = [];
    if (company) extraDetails.push(`Company: ${company}`);
    if (product) extraDetails.push(`Product: ${product}`);
    if (data.scrubber) extraDetails.push(`Scrubber: ${data.scrubber}`);
    if (data.pollutant) extraDetails.push(`Pollutant: ${data.pollutant}`);
    if (data.airflow) extraDetails.push(`Airflow: ${data.airflow}`);

    const formattedMessage = extraDetails.length > 0
      ? `${extraDetails.join('\n')}\n\nRequirements / Notes:\n${baseMessage || 'N/A'}`
      : baseMessage || 'No additional message provided';

    const payload = {
      access_key: ACCESS_KEY,
      subject: subject,
      from_name: name,
      name: name,
      company: company,
      email: email,
      phone: phone,
      product: product,
      message: formattedMessage,
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: 'Inquiry sent successfully' });
    } else {
      console.error('Web3Forms Response Error:', result);
      return NextResponse.json({ error: result.message || 'Failed to send inquiry' }, { status: 400 });
    }
  } catch (error) {
    console.error('Error sending inquiry:', error);
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}
