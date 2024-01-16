import NavBar from "../NavComponent/navBar";
import iphone from "../../../public/assets/images/iphone.png";
const HeaderComponent = () => {
  return (
    <>
      <NavBar />
      <div className="section1">
        <div className="vector1">
          <div className="headertextalign">
            <h1 className="headertext">
              Meet Your Favorite <br />
              <span className="doctors">Doctors</span> Online.
            </h1>
          </div>
          <div className="belowtext">
            <p>
              With HealthPal app, you can easily and quickly access the medical
              specialties and hospital services you need on all days of the
              week.
            </p>
          </div>
          <div className="buttongroup">
            <button className="downloadapp">Download App</button>
          </div>
          <div className="headersvg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="57"
              viewBox="0 0 17 57"
              fill="none">
              <path
                d="M8.5 26.7109L15.0695 33L17 31.1492L8.5 23L0 31.1492L1.94013 33L8.5 26.7109Z"
                fill="#88B7A4"
              />
              <path
                d="M8.5 38.7109L15.0695 45L17 43.1492L8.5 35L0 43.1492L1.94013 45L8.5 38.7109Z"
                fill="#88B7A4"
              />
              <path
                d="M8.5 50.7017L15.0695 57L17 55.14L8.5 47L0 55.14L1.94013 57L8.5 50.7017Z"
                fill="#88B7A4"
              />
              <path
                d="M8.5 3.71086L15.0695 10L17 8.14917L8.5 0L0 8.14917L1.94013 10L8.5 3.71086Z"
                fill="#88B7A4"
              />
              <path
                d="M8.5 14.7109L15.0695 21L17 19.1492L8.5 11L0 19.1492L1.94013 21L8.5 14.7109Z"
                fill="#88B7A4"
              />
            </svg>
          </div>
        </div>
        <div className="section2">
          <img src={iphone} alt="iphone" className="iphone" />
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
