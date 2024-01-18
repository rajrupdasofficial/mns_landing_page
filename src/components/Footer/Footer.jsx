import "../../../public/assets/css/footer.css";
import apple from "../../../public/assets/images/apple.png";
import google from "../../../public/assets/images/google.png";
import inp from "../../../public/assets/images/in.png";
import twi from "../../../public/assets/images/twitter.png";
import fb from "../../../public/assets/images/facebook.png";
const Footer = () => {
  return (
    <>
      <div className="rii">
        <footer>
          {/* Contact Section */}
          <div className="contact-section">
            <h3 className="obh">Contact Us</h3>
            <p className="textpp">
              We are honored to receive your comments and suggestions. Please
              feel free to contact us:
            </p>
            <div className="social-icons">
              <img src={apple} alt="apple" />
              <img src={google} alt="google" />
              <img src={inp} alt="linkedin" />
              <img src={twi} alt="twi" />
              <img src={fb} alt="fb" />
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <form>
              <label htmlFor="name" className="footerlabel">
                Your Name*
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="footerinput"
              />
              <label htmlFor="email" className="footerlabel">
                Your Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="footerinput"
              />
              <label htmlFor="message" className="footerlabel">
                Your Message*
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                className="footerinput"
                required></textarea>
              <button type="submit">Submit</button>
            </form>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
