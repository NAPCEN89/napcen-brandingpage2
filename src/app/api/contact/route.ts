import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const ACCESS_KEY =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "233963d2-f4b0-4f25-9a2f-bf7e151ac018";

    const application =
      data.application || data.equipment || data.product || data.scrubber || 'Website Contact';

    const extraDetails: string[] = [];
    if (data.company) extraDetails.push(`Company: ${data.company}`);
    if (data.scrubber) extraDetails.push(`Scrubber: ${data.scrubber}`);
    if (data.pollutant) extraDetails.push(`Pollutant: ${data.pollutant}`);
    if (data.airflow) extraDetails.push(`Airflow: ${data.airflow}`);

    const baseMessage = data.desc || data.message || data.description || '';
    const formattedMessage =
      extraDetails.length > 0
        ? `${extraDetails.join(' | ')}\n\n${baseMessage}`.trim()
        : baseMessage || 'Website Inquiry';

    const payload = {
      access_key: ACCESS_KEY,
      subject: `New Inquiry: ${application} — NAPCEN`,
      from_name: data.name || "NAPCEN Lead",
      name: data.name,
      company: data.company,
      email: data.email,
      phone: data.phone || data.mobile,
      application: application,
      message: formattedMessage,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (result.success) {
      return NextResponse.json({ success: true, message: "Inquiry sent successfully" });
    } else {
      console.error("Web3Forms Response Error:", result);
      return NextResponse.json({ error: result.message || 'Failed to send inquiry' }, { status: 400 });
    }
  } catch (error) {
    console.error("Error sending inquiry:", error);
    return NextResponse.json({ error: 'Failed to send inquiry' }, { status: 500 });
  }
}
