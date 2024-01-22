import Hero from "@/Components/hero";
import Home from "@/Components/home";
import Industry from "@/Components/industry";
import React from "react";
import Contact from "./Contact/page";
import Points from "@/Components/points";
import Services from "@/Components/services";
import BasicTabs from "@/Components/tab";


const page = () => {
  return (
    <div>
      <Home />
      <Hero />
      {/* <Services /> */}
      <BasicTabs />
      <Industry />
      <Points />
      <Contact />
    </div>
  );
};

export default page;
