"use client";

import Banner from "./components/home/Banner/Banner";
import HowItWork from "./components/home/HowItWork/HowItWork";
import WhyKeyChecksExists from "./components/home/WhyKeyChecksExists/WhyKeyChecksExists";

export default function Home() {
  return (
    <>
      <Banner />
      <WhyKeyChecksExists />
      <HowItWork/>
    </>
  );
}
