"use server";

import { ContactData } from "@/types";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendMailAction(contactData: ContactData) {
  // Basic validation to ensure environment variables exist
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_RECEIVER_EMAIL) {
    return { success: false, error: "Server configuration error." };
  }

  try {
    const {
      fullName,
      companyName,
      country,
      teamSize,
      email,
      whatsappNumber,
      purpose,
      currentSystem,
      preferedLanguage,
    } = contactData;

    await resend.emails.send({
      from: "Astrah OS Leads <onboarding@resend.dev>", // Replace with your domain once verified
      to: [process.env.CONTACT_RECEIVER_EMAIL],
      subject: `🚀 New Lead: ${fullName} from ${companyName}`,
      replyTo: email,
      html: `
        <div style="font-family: sans-serif; line-height: 1.5; color: #333;">
          <h2>New Conversation Lead</h2>
          <p>A new contact form was submitted for Astrah OS.</p>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Full Name:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Company:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${companyName}</td>
            </tr>
             <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Country:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${country}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Team Size:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${teamSize || "Not specified"}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Email:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>WhatsApp:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${whatsappNumber}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Current CRM:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${currentSystem}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border: 1px solid #eee;"><strong>Preferred Language:</strong></td>
              <td style="padding: 8px; border: 1px solid #eee;">${preferedLanguage}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #0ea5e9;">
            <strong>Message/Purpose:</strong><br/>
            ${purpose.replace(/\n/g, "<br/>")}
          </div>
        </div>
      `,
    });

    return { success: true };
  } catch (e) {
    console.error("Resend Error:", e);

    if (e instanceof Error) {
      return { success: false, error: e.message };
    }

    return {
      success: false,
      error: "An unexpected error occurred while sending the email.",
    };
  }
}
