"use client";

import React from "react";
import SectionTitle from "../components/ui/SectionTitle/SectionTitle";
import {
  CircleCheckBig,
  Clock4,
  FileText,
  Shield,
  TrendingUp,
  Zap,
} from "lucide-react";
import Reports from "./components/reports/Reports";
import Banner from "./components/AboutPageBanner/Banner";
import OurMission from "./components/OurMission/OurMission";

export const features = [
  {
    title: "Price & Market Insight",
    des: "Recent sold prices, £/sqft, and a fair value band.",
    icon: <TrendingUp size={26} />,
  },
  {
    title: "Flood & Environmental",
    des: "Clear, simple explanations of flood zones and local constraints.",
    icon: <Shield size={26} />,
  },
  {
    title: "EPC & Energy",
    des: "Understanding the EPC rating, running costs and possible improvements.",
    icon: <Zap size={26} />,
  },
  {
    title: "Schools & Safety",
    des: "Local school ratings, area safety and neighbourhood feel.",
    icon: <CircleCheckBig size={26} />,
  },
  {
    title: "Broadband & Connectivity",
    des: "FTTP availability, speeds, coverage and commute options.",
    icon: <Clock4 size={26} />,
  },
  {
    title: "Offer Strategy & Solicitor Questions",
    des: "Expert guidance on what to ask the agent, how to negotiate, and what your solicitor should check later.",
    icon: <FileText size={26} />,
  },
];
function About() {
  return (
    <>
      <Banner />
      <Reports />
      <OurMission />
    </>
  );
}

export default About;
