import "../../../public/assets/css/eightsection.css";
import gi from "../../../public/assets/images/gi.png";
const EightSection = () => {
  return (
    <>
      <div className="topsection">
        <div className="toop">
          <h3>Our Customers’ Reviews</h3>
        </div>
        <div className="eihtsection">
          <div className="ima">
            <img src={gi} alt="Card Image" className="card-img" />
          </div>
          <div className="text-container">
            <p className="textp">
              Using HealthPal has been a game-changer for me. As a busy working
              professional, finding time to visit a doctor was always a
              challenge. With this app, I can book appointments and receive
              medical consultations without the hassle of commuting and waiting
              rooms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EightSection;
