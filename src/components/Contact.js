import React, { useEffect, useState } from 'react';
import "../css/Contact.css";
import { Send, Phone, Mail, MapPin } from 'lucide-react';


const ContactItem = ({ icon: Icon, title, content }) => (
  <div className="contact-item">
    <div className="icon-container">
      <Icon className="icon" size={32} /> {/* Increased icon size */}
    </div>
    <div className="contact-text">
      <h3 className="contact-title">{title}</h3>
      <p className="contact-content">{content}</p>
    </div>
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    alert('Message sent successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-inputs">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="form-input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="form-input"
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          required
          className="form-input"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          required
          rows={6}
          className="form-textarea"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="submit-button"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

const ContactPage = () => {
  useEffect(() => {
    document.querySelector('.contact-page').classList.add('fade-in');
  }, []);

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-header">
        <h1 className="contact-title main-title">Contact Me</h1>
          <p className="contact-description">
          Feel free to reach out with any questions or collaboration ideas—I’d love to connect!
          </p>
        </div>
        <div className="contact-grid" id='name'>
          <ContactItem
            icon={Phone}
            title="Call Me"
            content="+91 9150690527"
          />
          <ContactItem
            icon={Mail}
            title="E-mail"
            content="srikanthyogeshwaran@gmail.com"
          />
          <ContactItem
            icon={MapPin}
            title="Location"
            content="3/661-1, Yamunanagar, Somayampalayam, Coimbatore"
          />
        </div>
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Get In Touch</h2>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;