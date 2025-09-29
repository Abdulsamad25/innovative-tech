# Email Setup Instructions

## Setting up Gmail for Nodemailer

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:

   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate a password
   - Use this password in the `.env` file

3. **Update the `.env` file**:
   ```
   EMAIL_USER=your-gmail@gmail.com
   EMAIL_PASS=your-16-character-app-password
   BUSINESS_EMAIL=where-you-want-to-receive-emails@gmail.com
   ```

## How to Run the Application

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Build the frontend**:

   ```bash
   npm run build
   ```

3. **Start the server**:

   ```bash
   npm run server
   ```

   Or for development:

   ```bash
   npm run start
   ```

4. **Access the application**:
   - Open http://localhost:5000 in your browser
   - The contact form will be fully functional

## Features

- **Responsive Contact Form**: Matches your design exactly
- **Email Notifications**: You receive detailed emails for each submission
- **Customer Confirmation**: Customers get automatic confirmation emails
- **Form Validation**: All fields are required and validated
- **Loading States**: Shows submission status to users
- **Error Handling**: Graceful error messages if email fails

## Email Templates

The system sends two emails:

1. **To Business Owner**: Detailed submission with all form data
2. **To Customer**: Professional confirmation email

Both emails are styled with HTML and include all relevant information.

## Security Notes

- Never commit the `.env` file to version control
- Use app passwords instead of your main Gmail password
- Consider using a dedicated business email for contact forms
