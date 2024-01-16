import "../../../public/assets/css/seventhsection.css"; // Import your CSS file
import phone from "../../../public/assets/images/iphone.png";
const SeventhSection = () => {
  return (
    <>
      <div className="toptext">
        <h3>Easily Book Your Appointment</h3>
      </div>
      <div className="gradientbackground">
        <div className="imageContainer">
          <div className="imageWithText">
            <img src={phone} alt="Appointment 1" className="image" />
          </div>

          <div className="imageWithText">
            <img src={phone} alt="Appointment 2" className="image" />
          </div>

          <div className="imageWithText">
            <img src={phone} alt="Appointment 3" className="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SeventhSection;
