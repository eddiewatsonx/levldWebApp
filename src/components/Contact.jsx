import React from 'react';

export default function Contact() {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Message sent successfully!');
      } else {
        alert(`Failed: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message.');
    }
  };

  return (
    <section id="contact" className="container py-5">
      <h2 className="text-center fw-bold mb-4" style={{ color: "#A855F7" }}>Get in Touch</h2>
      <p className="text-center mb-4">
        We'd love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
            </div>
            <button type="submit" className="btn btn-lg w-100" style={{ backgroundColor: "#A855F7", color: "white" }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}