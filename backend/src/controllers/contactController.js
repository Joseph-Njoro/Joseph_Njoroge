import nodemailer from 'nodemailer'; // Use ES module import
import Contact from '../models/Contact.js'; // Import Contact model with ES module syntax

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.NOTIFY_EMAIL,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    res.status(200).send('Message sent successfully');
  } catch (err) {
    res.status(500).send('Error sending message');
  }
};