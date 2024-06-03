import React from "react";
import ContentWrapper from "./components/contentWrapper/ContentWrapper";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/heroSection/HeroSection";
import Features from "./components/feauters/Features";
import Users from "./components/users/Users";
import phone4 from "./images/phone4.png";
import phone5 from "./images/phone5.png";
import phone6 from "./images/phone6.png";
import icon1 from "./images/star1.svg";
import icon2 from "./images/star2.png";
import icon3 from "./images/cube2.png";
import bellicon from "./images/bellIcon.svg";
import star5 from "./images/star5.png";
import FAQ from "./components/faq/FAQ";
import Download from "./components/download/Download";
import Footer from "./components/footer/Footer";

const App = () => {
  const icons = [icon1, icon2, icon3];
  const intervals = [];
  const singleRowHeading1 = "Clever Notifications";
  const singleRowHeading2 = "Fully Customizable";
  const singleRowContent1 =
    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duistristique lacus, et blandit viverra nisl velit. Sed mattisrhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget egetac dolor neque lorem sapien, suspendisse aliquam.";
  const singleRowContent2 =
    "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duistristique lacus, et blandit viverra nisl velit. Sed mattisrhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget egetac dolor neque lorem sapien, suspendisse aliquam.";

  for (let i = 0; i < 3; i++)
    intervals.push({
      iconImage: icons[i],
      heading: "Budgeting Intervals",
      content:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
    });
  return (
    <ContentWrapper>
      <Navbar />
      <HeroSection />
      <Features
        intervalSection={true}
        heading={"Uifry Premium"}
        subheading={"Features"}
        intervals={intervals}
        image={phone4}
        singleRowSection={false}
      />
      <Features
        colReverse={true}
        heading={"Why Choose UiFry"}
        subheading={"ADVANTAGES"}
        image={phone5}
        iconImage={bellicon}
        singleRowHeading={singleRowHeading1}
        singleRowContent={singleRowContent1}
      />
      <Features
        image={phone6}
        iconImage={star5}
        singleRowHeading={singleRowHeading2}
        singleRowContent={singleRowContent2}
      />
      <Users />
      <FAQ />
      <Download />
      <Footer />
    </ContentWrapper>
  );
};

export default App;
