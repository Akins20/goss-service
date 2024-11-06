import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Ensure this endpoint only handles POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Destructure the data from the request body
  const { name, email, message } = req.body;

  // Set up Nodemailer transport using Gmail
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Replace with your email provider if different
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Format the current date and time
  const date = new Date();
  const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;

  // Define the HTML template for the email with inline CSS
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd;">
      <h2 style="color: #007acc; text-align: center;">New Contact Message</h2>
      <p style="font-size: 16px; color: #555;">You've received a new message from the contact form on your website.</p>
      
      <div style="margin-top: 20px;">
        <p style="font-size: 14px;"><strong>Name:</strong> ${name}</p>
        <p style="font-size: 14px;"><strong>Email:</strong> ${email}</p>
        <p style="font-size: 14px;"><strong>Message:</strong></p>
        <p style="font-size: 14px; background: #f9f9f9; padding: 10px; border-radius: 5px; white-space: pre-line;">${message}</p>
      </div>

      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
      
      <p style="font-size: 12px; color: #777;">Sent on: ${formattedDate}</p>
    </div>
  `;

  // Email configuration options
  const mailOptions = {
    from: `"Website Contact" <${email}>`, // Sender address
    to: process.env.EMAIL_USER, // Recipient's email address
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\nSent on: ${formattedDate}`, // Fallback text version
    html: htmlContent, // HTML version of the email content
  };

  // Attempt to send the email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Error sending email" });
  }
}
