import "../../../public/assets/css/fourthsection.css";
import phone from "../../../public/assets/images/iphone.png";

const FourthSection = () => {
  return (
    <>
      <div>
        <div className="fourthsection">
          <div className="adjust">
            <h5 className="he">Access to specialist doctors</h5>
            <p className="pk">
              You have easy access to various medical specialties and doctors.
            </p>
          </div>
          <img src={phone} alt="phone" className="phone" />
        </div>
      </div>
    </>
  );
};

export default FourthSection;
