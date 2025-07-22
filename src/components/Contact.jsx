const Contact = () => (
  <section className="contact-section">
    <h1>Contact Us</h1>
    <p>
      Have a question, suggestion, or want to collaborate? Fill out the form below or reach us directly using the contact details.
    </p>
    <div className="contact-content">
      <form className="contact-form" onSubmit={e => e.preventDefault()} aria-label="Contact form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required placeholder="Your Name" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required placeholder="Your Email" />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-details">
        <h2>Contact Details</h2>
        <ul>
          <li><strong>Email:</strong> Muhammadwaleeedali@gmail.com</li>
          <li><strong>Phone:</strong> 0349 4203073</li>
          <li><strong>Address:</strong> Chak No 243GB Kalyanpur</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Contact; 