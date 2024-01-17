import EightSection from "../components/EightSection/EightSection";
import FifthSection from "../components/FifthSection/FifthSection";
import Footer from "../components/Footer/Footer";
import FourthSection from "../components/FourthSection/FourthSection";
import HeaderComponent from "../components/HeaderComponent/header";
import SeventhSection from "../components/SeventhSection/SeventhSection";
import SixthSecton from "../components/SixthSection/SixthSecton";
import ThirdSection from "../components/ThirdSection/ThirdSection";
import SecondSection from "../components/secondsection/SecondSection";

const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      {/* <SixthSecton /> */}
      <SeventhSection />
      <EightSection />
      <Footer />
    </>
  );
};

export default HomePage;
