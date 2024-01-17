import iphone from "../../../public/assets/images/iphone.png";
import "../../../public/assets/css/thirdsection.css";
import map from "../../../public/assets/images/map.jpeg";
const ThirdSection = () => {
  return (
    <>
      <div className="topthird">
        <div className="thirdsection">
          <img src={iphone} alt="section2" className="thirdsectionimage" />
          <div className="thtext-container">
            <h4 className="thtext">Quick access to the services you need</h4>
            <p className="thtextp">
              Easily find the doctors and medical centers you need, on the map.
            </p>
          </div>
        </div>
        <div className="mapOverlay"></div>
        <img src={map} alt="map" className="mapImage" />
      </div>
    </>
  );
};

export default ThirdSection;
