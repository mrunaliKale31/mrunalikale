import { Resend } from 'resend';

function sanitizeText(value) {
  if (typeof value !== 'string') return '';
  return value.replace(/</g, '&lt;').replace(/>/g, '&gt;').trim();
}

function sanitizeEmail(value) {
  if (typeof value !== 'string') return '';
  return value.trim().toLowerCase();
}

function getErrorMessage(error) {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === 'string' && error.trim()) return error;
  return 'Your inquiry could not be delivered. Please try again later.';
}

function validatePayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    return { valid: false, message: 'Invalid form payload.' };
  }

  const name = sanitizeText(payload.name);
  const email = sanitizeEmail(payload.email);
  const message = sanitizeText(payload.description || payload.message || '');

  if (!name || !email || !message) {
    return { valid: false, message: 'Name, email, and message are required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { valid: false, message: 'Please provide a valid email address.' };
  }

  return {
    valid: true,
    data: {
      name,
      email,
      company: sanitizeText(payload.orgType || payload.company || ''),
      projectType: sanitizeText(payload.projectType || ''),
      budget: sanitizeText(payload.budget || ''),
      message,
      submittedAt: sanitizeText(payload.submittedAt || ''),
    },
  };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  const validation = validatePayload(req.body);
  if (!validation.valid) {
    return res.status(400).json({ message: validation.message });
  }

  const { data } = validation;
  const apiKey = process.env.RESEND_API_KEY || process.env.mail_MKportfolio;
  const contactEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL || process.env.CONTACT_EMAIL || 'no-reply@kyoorhomoeo.com';

  if (!apiKey || !contactEmail || !fromEmail) {
    return res.status(500).json({
      message: 'Email delivery is not configured. Add RESEND_API_KEY (or your existing mail_MKportfolio secret), CONTACT_EMAIL, and RESEND_FROM_EMAIL in your environment variables.',
    });
  }

  const resend = new Resend(apiKey);

  const emailBody = [
    '----------------------------------------',
    'New Collaboration Inquiry',
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || 'Not provided'}`,
    `Project Type: ${data.projectType || 'Not provided'}`,
    `Budget: ${data.budget || 'Not provided'}`,
    '',
    `Message: ${data.message}`,
    '',
    `Submitted At: ${data.submittedAt || 'Not provided'}`,
    '----------------------------------------',
  ].join('\n');

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: [contactEmail],
      subject: `New Collaboration Inquiry from ${data.name}`,
      text: emailBody,
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return res.status(200).json({ message: 'Your inquiry was sent successfully.' });
  } catch (error) {
    const message = getErrorMessage(error);
    console.error('Contact email failed:', error);
    return res.status(500).json({
      message: message.includes('verified')
        ? `Resend rejected the sender address: ${message}`
        : 'Your inquiry could not be delivered. Please verify your Resend configuration and sender address.',
    });
  }
}
