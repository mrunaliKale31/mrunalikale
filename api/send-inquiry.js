import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const payload = req.body || {};
  const {
    name,
    email,
    orgType,
    projectType,
    projectSize,
    teamSize,
    role,
    description,
    timeline,
    budget,
    referenceLinks,
    preferredContact,
    fileName,
  } = payload;

  if (!name || !email || !description) {
    return res.status(400).json({ message: 'Name, email, and project description are required.' });
  }

  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return res.status(500).json({
      message: 'Email delivery is not configured yet. Please set SMTP_USER and SMTP_PASS in the deployment environment.',
    });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT || 465),
    secure: true,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: process.env.INQUIRY_TO_EMAIL || 'mrunalipradeepkale@gmail.com',
      subject: `New collaboration inquiry from ${name}`,
      html: `
        <h2>New collaboration inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Organization type:</strong> ${orgType || 'Not provided'}</p>
        <p><strong>Project type:</strong> ${projectType || 'Not provided'}</p>
        <p><strong>Project size:</strong> ${projectSize || 'Not provided'}</p>
        <p><strong>Team size:</strong> ${teamSize || 'Not provided'}</p>
        <p><strong>Role:</strong> ${role || 'Not provided'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'Not provided'}</p>
        <p><strong>Budget:</strong> ${budget || 'Not provided'}</p>
        <p><strong>Preferred contact:</strong> ${preferredContact || 'Not provided'}</p>
        <p><strong>Reference links:</strong> ${referenceLinks || 'Not provided'}</p>
        <p><strong>Uploaded file:</strong> ${fileName || 'None'}</p>
        <hr />
        <p><strong>Project description:</strong></p>
        <p>${description}</p>
      `,
    });

    return res.status(200).json({ message: 'Inquiry sent successfully.' });
  } catch (error) {
    console.error('Inquiry email failed:', error);
    return res.status(500).json({
      message: 'Your inquiry could not be delivered. Please verify the mail server configuration.',
    });
  }
}
