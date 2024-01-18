import "../../../public/assets/css/fifthsection.css";
import phone from "../../../public/assets/images/hsf.png";

const FifthSection = () => {
  return (
    <div className="aboutspace">
      <img src={phone} alt="phone" className="phone" />
      <div className="adjst">
        <h6 className="huu">About Us</h6>
        <p className="pauu">
          Our platform connects you with qualified doctors who can provide
          medical consultations from the convenience of your own home. With our
          user-friendly interface, you can book appointments, chat with doctors
          via video call, and even receive e-prescriptions.
        </p>
      </div>
    </div>
  );
};

export default FifthSection;
