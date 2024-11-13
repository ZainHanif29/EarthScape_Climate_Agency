import ContactModel from "../models/contact.model.js";


export const handleContactForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate input fields
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Save the contact form data to the database
    const newContact = new ContactModel({ name, email, message });
    await newContact.save();

    return res.status(201).json({
      success: true,
      message: "Your message has been submitted successfully!",
    });
  } catch (error) {
    console.error("Error saving contact form data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while submitting your message. Please try again later.",
    });
  }
};
