import nodemailer from 'nodemailer'

export async function POST(request) {
  const { name, email, phone, subject, message } = await request.json()


  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
    

        // Define recipients
    // const recipients = [
    //   'senseprojects@yahoo.com',
    //   'senseprojects2019@gmail.com',
    //   'info@senseprojects.in'
    // ];

    const recipients = ['bhavishya.sense@gmail.com']

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipients,
      subject: 'New Contact Message',
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #333;">
          <div style="background-color: #174EC1; color: #fff; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
            <p style="margin: 0;">You have a new message from the StarGlass website.</p>
          </div>
          <div style="padding: 20px;">
            <table cellspacing="0" cellpadding="10" border="1" style="border-collapse: collapse; width: 100%; max-width: 600px; margin: 20px auto; border: 1px solid #ddd;">
              <tr style="background-color: #f2f2f2;">
                <td><strong>Name</strong></td>
                <td>${name}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td><strong>Email</strong></td>
                <td>${email}</td>
              </tr>
              <tr style="background-color: #f2f2f2;">
                <td><strong>Phone</strong></td>
                <td>${phone}</td>
              </tr>
              <tr style="background-color: #f9f9f9;">
                <td><strong>Subject</strong></td>
                <td>${subject}</td>
              </tr>
              <tr style="background-color: #f2f2f2;">
                <td><strong>Message</strong></td>
                <td>${message}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #f2f2f2; padding: 10px; text-align: center; font-size: 12px; color: #555;">
            <p style="margin: 0;">This email was sent from the <strong>StarGlass website</strong>.</p>
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (error) {
    console.error('Mail error:', error)
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
    })
  }
}