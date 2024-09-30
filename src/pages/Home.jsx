import React from "react";
import Navtop from "../components/navtop/Navtop";
import Ourpillars from "../components/ourpillars/Ourpillars";
import Whoweare from "../components/whoweare/Whoweare";
import Oursupport from "../components/oursupport/Oursupport";
import Partners from "../components/partners/Partners";
import Inpartners from "../components/inpartners/Inpartners";
import Newsletter from "../components/newsletter/Newsletter";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navtop />
      <Ourpillars />
      <Whoweare />
      <Oursupport />
            <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
