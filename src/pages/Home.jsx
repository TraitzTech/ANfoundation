import React from "react";
import Navtop from "../components/navtop/Navtop";
import Ourpillars from "../components/ourpillars/Ourpillars";
import Whoweare from "../components/whoweare/Whoweare";
import Oursupport from "../components/oursupport/Oursupport";
import Partners from "../components/partners/Partners";
import Inpartners from "../components/inpartners/Inpartners";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";
import Contact from "../components/contactus/Contact";
import Empower from "../components/empower/Empower";
import Bfooter from "../components/bottomfooter/Bfooter";
import Whewework from "../components/where-we-work/Whewework";

const Home = () => {
  return (
    <div>
      {/* <Navtop /> */}
      <Empower />
      <Ourpillars />
      <Whoweare />

      {/* <Whewework /> */}
      <Oursupport />
      <Newsletter />
      <Footer />
      <Bfooter />
    </div>
  );
};

export default Home;
