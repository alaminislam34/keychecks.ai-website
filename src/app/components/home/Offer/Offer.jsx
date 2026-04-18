import Link from "next/link";
import LinkButton from "../../ui/link/LinkButton";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";

function Offer() {
  return (
    <section className="bg-white py-10 mb-10">
      <div className="max-w-360 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center py-6">
        <div className="pb-6">
          <SectionTitle
            title={"Ready to make a confident offer?"}
            color={"text-dark"}
          />
          <p className="text-gray md:text-lg">
            Get your expert-reviewed property report delivered today.
          </p>
        </div>
        <div>
          <Link
            href={"/pricing"}
            className="bg-linear-to-r from-primary to-primary/90 inline-block z-10 text-white py-4 px-8 text-lg md:text-xl rounded-xl font-semibold tracking-wider"
          >
            Get My Report
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Offer;
