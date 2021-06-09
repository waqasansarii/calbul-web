import React from "react";
import DoITMailChimp from "../Components/HomeComp/DoITMailChimp";
import GrowMailChimp from "../Components/HomeComp/GrowMailChimp";
import PushingForword from "../Components/HomeComp/PushingForword";
import TopSection from "../Components/HomeComp/TopSection";
import WeWillHelp from "../Components/HomeComp/WeWillHelp";
import ComesTogether from "../Components/HomeComp/ComesTogether";
import Navbar from "../Layout/Navbar";

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
      <img
        src="https://eep.io/images/yzco4xsimv0y/1NIsKMRR8bNuZlQVfWPePQ/4c81beeea56054b45be98988dcb359a8/ILLO_Hero_Transactional-Target-1520.png?w=500&fm=webp&q=80"
        alt="..."
      />
    </div>
  );
};

export default Home;
