/* eslint-disable no-undef */
const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    if (!email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Business email (to you)
    const businessEmailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${service}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="https://res.cloudinary.com/dvd7wbty8/image/upload/v1759149595/logo_ut6dij.png" alt="InnovativeTech Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            </div>
            <h2 style="color: #ffffff; text-align: center; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
            
            <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid #3b82f6; margin-bottom: 20px;">
              <h3 style="color: #3b82f6; margin-bottom: 15px; font-size: 18px;">Contact Details:</h3>
              <p style="color: #e2e8f0; margin: 8px 0;"><strong style="color: #ffffff;">Name:</strong> ${name}</p>
              <p style="color: #e2e8f0; margin: 8px 0;"><strong style="color: #ffffff;">Email:</strong> ${email}</p>
              <p style="color: #e2e8f0; margin: 8px 0;"><strong style="color: #ffffff;">Service Requested:</strong> ${service}</p>
            </div>
            
            <h3 style="color: #3b82f6; margin-bottom: 15px; margin-top: 25px; font-size: 18px;">Project Details:</h3>
            <div style="background: rgba(15, 23, 42, 0.8); padding: 20px; border-radius: 8px; border-left: 4px solid #2563eb; color: #e2e8f0; line-height: 1.6;">
              ${message.replace(/\n/g, "<br>")}
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; text-align: center;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0;">This email was sent from the InnovativeTech contact form.</p>
              <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">Received on: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </div>
      `,
    };

    // Customer confirmation email
    const customerEmailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting InnovativeTech",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="https://res.cloudinary.com/dvd7wbty8/image/upload/v1759149595/logo_ut6dij.png" alt="InnovativeTech Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            </div>
            <h2 style="color: #ffffff; text-align: center; font-size: 24px; font-weight: 600;">Thank You for Your Inquiry!</h2>
            
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">Dear <span style="color: #3b82f6; font-weight: 600;">${name}</span>,</p>
            
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">Thank you for reaching out to InnovativeTech. We have received your inquiry about <strong style="color: #3b82f6;">${service}</strong> and will get back to you within 24 hours.</p>
            
            <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid #3b82f6; margin: 25px 0;">
              <h3 style="color: #3b82f6; margin-top: 0; font-size: 18px;">Your Message Summary:</h3>
              <p style="color: #e2e8f0; margin: 10px 0;"><strong style="color: #ffffff;">Service:</strong> ${service}</p>
              <p style="color: #e2e8f0; margin: 10px 0;"><strong style="color: #ffffff;">Message:</strong></p>
              <div style="background: rgba(15, 23, 42, 0.8); padding: 15px; border-radius: 6px; margin-top: 10px;">
                <p style="font-style: italic; color: #cbd5e1; line-height: 1.6; margin: 0;">${message}</p>
              </div>
            </div>
            
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6;">In the meantime, feel free to explore our services on our website or contact us directly at:</p>
            <div style="background: rgba(15, 23, 42, 0.5); padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="color: #3b82f6; margin: 8px 0;">📞 Phone: +234 913 7286 441</p>
              <p style="color: #3b82f6; margin: 8px 0;">📧 Email: samadolalekan15@gmail.com</p>
            </div>
            
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6; margin-top: 25px;">Best regards,<br>
            <strong style="color: #3b82f6;">InnovativeTech Team</strong></p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; text-align: center;">
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 5px 0;">📧 samadolalekan15@gmail.com</p>
              <p style="color: #94a3b8; font-size: 14px; margin: 0 0 5px 0;">📞 +234 913 7286 441</p>
              <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">This is an automated confirmation email. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessEmailOptions),
      transporter.sendMail(customerEmailOptions),
    ]);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}