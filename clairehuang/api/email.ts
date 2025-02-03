import { IEmail } from "../src/types/email";
import sendgrid from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY is not set");
  process.exit(1);
}

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;

  const { sender, email, content }: IEmail = body;

  if (!sender || !email || !content) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const msg = {
    to: "hclaire1007@gmail.com",
    from: "hclaire1007@gmail.com",
    subject: "New Contact From clairehuang.tech",
    text: `Sender: ${sender}\nEmail: ${email}\nContent: ${content}`,
    html: `<strong>Sender:</strong> ${sender}<br><strong>Email:</strong> ${email}<br><strong>Content:</strong> ${content}`,
  };
  console.log(msg);

  try {
    await sendgrid.send(msg);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
