"use client";

import Banner from "./components/home/Banner/Banner";
import Features from "./components/home/Features/Features";
import HowItWork from "./components/home/HowItWork/HowItWork";
import Offer from "./components/home/Offer/Offer";
import Pricing from "./components/home/Pricing/Pricing";
import WhyKeyChecksExists from "./components/home/WhyKeyChecksExists/WhyKeyChecksExists";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyKeyChecksExists />
      <HowItWork />
      <Features />
      <Pricing />
      <Offer />
    </>
  );
}
