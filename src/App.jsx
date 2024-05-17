import React from "react";
import Home from "~/pages/Home";
import Navbar from "~/components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MaleBestSellers from "~/pages/GenderProducts/MaleBestSellers";
import FemaleBestSellers from "~/pages/GenderProducts/FemaleBestSellers";
import Error from "~/components/Error";
import Allproducts from "~/pages/GenderProducts/Allproducts";
import Updates from "~/pages/Updates";
import shoes from "~/db.js";
import AboutUs from "~/pages/Footer/AboutUs";
import Careers from "~/pages/Footer/Careers";
import ShoesCareers from "~/pages/Footer/ShoesCareers";
import ContactUs from "~/pages/Footer/ContactUs";
import SocialProjects from "~/pages/Footer/SocialProjects";
import Faq from "~/pages/Footer/Faq";
import PersonalData from "~/pages/Footer/PersonalData";
import TermsConditions from "~/pages/Footer/TermsConditions";
import CookiePolicy from "~/pages/Footer/CookiePolicy";
import PrivacyPolicy from "~/pages/Footer/PrivacyPolicy";
import OurDealer from "~/pages/Footer/OurDealer";
import RentWearhouse from "~/pages/Footer/RentWearhouse";
import ShareDesign from "~/pages/Footer/ShareDesign";
import AirforceOne from "./pages/Products/AirforceOne";
import AirforceRainbow from "./pages/Products/AirforceRainbow";
import AirforceCherry from "./pages/Products/AirforceCherry";
import MaleDaily from "~/pages/Daily/MaleDaily";
import FemaleDaily from "~/pages/Daily/FemaleDaily";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home shoes={shoes} />} />
        <Route
          path="/malebestsellers"
          element={<MaleBestSellers shoes={shoes} />}
        />
        <Route
          path="/femalebestsellers"
          element={<FemaleBestSellers shoes={shoes} />}
        />
        <Route path="/allproducts" element={<Allproducts shoes={shoes} />} />
        <Route path="/maledaily" element={<MaleDaily shoes={shoes} />} />
        <Route path="/femaledaily" element={<FemaleDaily shoes={shoes} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/shoes-careers" element={<ShoesCareers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/social-projects" element={<SocialProjects />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/personal-data" element={<PersonalData />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/our-dealer" element={<OurDealer />} />
        <Route path="/rent-wearhouse" element={<RentWearhouse />} />
        <Route path="/share-design" element={<ShareDesign />} />
        <Route path="/airforceone" element={<AirforceOne />} />
        <Route path="/airforcerainbow" element={<AirforceRainbow />} />
        <Route path="/airforcecherry" element={<AirforceCherry />} />
        <Route path="/updates" element={<Updates />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}
