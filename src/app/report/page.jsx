import React from "react";
import ReportHeader from "./components/ReportHeader";
import OverallAssessment from "./components/OverallAssesment";
import FloodRiskAssessment from "./components/FloodRiskAssessment";
import EnergyPerformanceCertificate from "./components/EnergyPerformanceCertificate";
import LocalCrimeSafety from "./components/LocalCrimeSafety";
import SchoolsEducation from "./components/SchoolsEducation";
import BroadbandConnectivity from "./components/BroadbandConnectivity";
import CouncilTax from "./components/CouncilTax";
import LocalLandSearch from "./components/LocalLandSearch";
import PropertyValueAnalysis from "./components/PropertyValueAnalysis";
import TransportCommute from "./components/TransportCommute";
import BuyersSummary from "./components/BuyersSummary";
import YourNextSteps from "./components/YourNextSteps";
import GetYourOwnReport from "./components/GetYourOwnReport";

function ReportPage() {
  return (
    <section className="bg-linear-to-r from-[#FCF8FF] to-[#FDFAFF] py-12 md:py-20">
      <div className="max-w-5xl shadow-lg bg-white mx-auto w-[92%] lg:w-11/12  rounded-2xl overflow-hidden">
        <ReportHeader />
        <section className="m-4 md:m-8">
          <OverallAssessment />
        </section>
        <section className="m-4 md:m-8">
          <FloodRiskAssessment />
        </section>
        <section className="m-4 md:m-8">
          <EnergyPerformanceCertificate />
        </section>
        <div className="m-4 md:m-8">
          <LocalCrimeSafety />
        </div>
        <div className="m-4 md:m-8">
          <SchoolsEducation />
        </div>

        <div className="m-4 md:m-8">
          <BroadbandConnectivity />
        </div>
        <div className="m-4 md:m-8">
          <CouncilTax />
        </div>
        <div className="m-4 md:m-8">
          <LocalLandSearch />
        </div>
        <div className="m-4 md:m-8">
          <PropertyValueAnalysis />
        </div>
        <div className="m-4 md:m-8">
          <TransportCommute />
        </div>
        <div className="m-4 md:m-8">
          <BuyersSummary />
        </div>
        <div className="m-4 md:m-8">
          <YourNextSteps />
        </div>
        <div>
          <GetYourOwnReport />
        </div>
      </div>
    </section>
  );
}

export default ReportPage;
