import "../../../public/assets/css/secondsection.css";
import Cards from "../ui/cards/cards";
const SecondSection = () => {
  return (
    <>
      <div className="features">
        <p className="leftline">------</p>
        Features
        <p className="rightline">------</p>
      </div>
      <div className="below">
        <div className="cards">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default SecondSection;
