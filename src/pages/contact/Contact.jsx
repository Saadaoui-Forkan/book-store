import "./contact.css";
import '../../App.css'
import HeadingTitle from '../../components/heading-title/HeadingTitle'

const Contact = () => {
  return (
    <section className="contact">
      <HeadingTitle title="Get In Touch" />
      <div className="newsletter">

        <form onSubmit={(e)=> e.preventDefault()} className="newsletter-form">
            <h3>subscribe for latest updates</h3>
            <input type="text" className="newsletter-input" placeholder="Name *" />
            <input type="text" className="newsletter-input" placeholder="Subject *" />
            <input type="email" className="newsletter-input" placeholder="Email *" />
            <textarea
              placeholder="Your Message *"
              className="newsletter-textarea"
              rows="5"
            ></textarea>
            <input type="submit" value="subscribe" className="newsletter-btn"/>
        </form>
      </div>
      {/* <div className="contact-wrapper">
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-house-fill"></i>
            Address
          </div>
          <p className="contact-item-text">Iraq-Baghdad-Alrashid St</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-telephone-fill"></i>
            Phone
          </div>
          <p className="contact-item-text">123-456-789</p>
        </div>
        <div className="contact-item">
          <div className="contact-item-icon">
            <i className="bi bi-envelope-fill"></i>
            Email
          </div>
          <p className="contact-item-text">info@fakeemail.com</p>
        </div>
      </div>
      <form onSubmit={e => e.preventDefault()} className="contact-form">
        <h2 className="contact-form-title">Contact Us Form</h2>
        <div className="contact-input-wrapper">
          <input type="text" placeholder="Name *" />
          <input type="text" placeholder="Subject *" />
          <input type="text" placeholder="Email *" />
        </div>
        <textarea
          placeholder="Your Message *"
          className="contact-textarea"
          rows="5"
        ></textarea>
        <button className="contact-btn">Send</button>
      </form> */}
    </section>
  );
};

export default Contact;