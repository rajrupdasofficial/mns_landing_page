import FifthSection from "../components/FifthSection/FifthSection";
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
      <SixthSecton />
      <SeventhSection />
    </>
  );
};

export default HomePage;
