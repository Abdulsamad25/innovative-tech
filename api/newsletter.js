/* eslint-disable no-undef */
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://innovatiive-tech.netlify.app');
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
    const { email } = req.body;

    // Validate email
    if (!email || !email.includes("@")) {
      return res.status(400).json({ error: "Valid email is required" });
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Business notification email
    const businessNotificationEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: "New Newsletter Subscription",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); border-radius: 12px; padding: 30px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="https://res.cloudinary.com/dvd7wbty8/image/upload/v1759149595/logo_ut6dij.png" alt="InnovativeTech Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            </div>
            <h2 style="color: #ffffff; text-align: center; font-size: 24px; font-weight: 600;">New Newsletter Subscriber</h2>
            <p style="color: #e2e8f0; font-size: 16px; text-align: center;">A new user just subscribed to the newsletter:</p>
            <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid #3b82f6; margin: 20px 0;">
              <p style="color: #e2e8f0; margin: 8px 0;"><strong style="color: #ffffff;">Email:</strong> <span style="color: #3b82f6;">${email}</span></p>
              <p style="color: #e2e8f0; margin: 8px 0;"><strong style="color: #ffffff;">Subscribed on:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <div style="background: rgba(15, 23, 42, 0.8); padding: 20px; border-radius: 8px; margin: 25px 0;">
              <p style="color: #3b82f6; font-weight: 600; margin-bottom: 15px;">Next Steps:</p>
              <ul style="color: #e2e8f0; line-height: 1.8;">
                <li>Add this email to your newsletter mailing list</li>
                <li>Send a welcome newsletter</li>
                <li>Consider sending relevant updates about your services</li>
              </ul>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; text-align: center;">
              <p style="color: #64748b; font-size: 13px; margin: 0;">This notification was sent from the InnovativeTech newsletter subscription form.</p>
            </div>
          </div>
        </div>
      `,
    };

    // Welcome email to subscriber
    const welcomeEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Welcome to InnovativeTech Newsletter!",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 20px; max-width: 600px; margin: 0 auto; border-radius: 12px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 12px; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);">
            <div style="text-align: center; margin-bottom: 25px;">
              <img src="https://res.cloudinary.com/dvd7wbty8/image/upload/v1759149595/logo_ut6dij.png" alt="InnovativeTech Logo" style="width: 60px; height: 60px; border-radius: 12px;" />
            </div>
            <h2 style="color: #ffffff; text-align: center; font-size: 28px; font-weight: 600;">Welcome to InnovativeTech!</h2>
            
            <p style="color: #e2e8f0; font-size: 16px; line-height: 1.6; text-align: center;">Thank you for subscribing to our newsletter! We're excited to have you join our community.</p>
            
            <div style="background: rgba(59, 130, 246, 0.1); padding: 20px; border-radius: 8px; border: 1px solid #3b82f6; margin: 25px 0;">
              <h3 style="color: #3b82f6; margin-top: 0; font-size: 18px;">What to expect:</h3>
              <ul style="color: #e2e8f0; line-height: 1.8;">
                <li>Latest technology trends and insights</li>
                <li>Tips for web development and digital marketing</li>
                <li>Case studies and success stories</li>
                <li>Exclusive offers and early access to new services</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin: 30px 0; background: rgba(15, 23, 42, 0.5); padding: 20px; border-radius: 8px;">
              <p style="color: #e2e8f0; margin-bottom: 15px;">Follow us on social media for daily updates:</p>
              <div style="margin: 15px 0;">
                <a href="https://x.com/yahaya_samad" style="color: #3b82f6; text-decoration: none; margin: 0 15px; font-weight: 500;">🐦 Twitter</a>
                <a href="https://www.linkedin.com/in/abdulsamad-yahaya-b68228323?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" style="color: #3b82f6; text-decoration: none; margin: 0 15px; font-weight: 500;">💼 LinkedIn</a>
                <a href="https://github.com/Abdulsamad25" style="color: #3b82f6; text-decoration: none; margin: 0 15px; font-weight: 500;">🐙 Github</a>
              </div>
            </div>
            
            <p style="color: #e2e8f0; font-size: 16px; text-align: center; margin-top: 25px;">Best regards,<br>
            <strong style="color: #3b82f6;">InnovativeTech Team</strong></p>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #475569; text-align: center;">
              <div style="margin-bottom: 15px;">
                <p style="margin: 0 0 5px 0; color: #94a3b8; font-size: 14px;">📧 samadolalekan15@gmail.com</p>
                <p style="margin: 0 0 5px 0; color: #94a3b8; font-size: 14px;">📞 +234 913 7286 441</p>
                <p style="margin: 0; color: #94a3b8; font-size: 14px;">📍 123 Main Street, Innovation City, CA 90210</p>
              </div>
              <div style="border-top: 1px solid #475569; padding-top: 15px; margin-top: 15px;">
                <p style="margin: 0; color: #64748b; font-size: 12px;">If you didn't subscribe to this newsletter, you can safely ignore this email or contact us.</p>
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(businessNotificationEmail),
      transporter.sendMail(welcomeEmail),
    ]);

    res.status(200).json({
      success: true,
      message: "Successfully subscribed to newsletter",
    });
  } catch (error) {
    console.error("Error processing newsletter subscription:", error);
    res.status(500).json({
      error: "Failed to subscribe to newsletter",
      details: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}