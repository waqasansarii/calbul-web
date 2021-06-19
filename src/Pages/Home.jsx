import React from "react";
import DoITMailChimp from "../Components/HomeComp/DoITMailChimp";
import GrowMailChimp from "../Components/HomeComp/GrowMailChimp";
import PushingForword from "../Components/HomeComp/PushingForword";
import TopSection from "../Components/HomeComp/TopSection";
import WeWillHelp from "../Components/HomeComp/WeWillHelp";
import ComesTogether from "../Components/HomeComp/ComesTogether";
import Navbar from "../Layout/Navbar";
import SeventenStreet from "../Components/HomeComp/SeventenStreet";
import Resources from '../Components/HomeComp/Resources'

const Home = () => {
  return (
    <div>
        <Navbar />
      <TopSection />
      <DoITMailChimp />
      <WeWillHelp />
      <GrowMailChimp />
      <PushingForword />
      <ComesTogether />
      <SeventenStreet />
      <Resources />
    </div>
  );
};

export default Home;
