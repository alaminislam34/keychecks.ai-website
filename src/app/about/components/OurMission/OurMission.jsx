import SectionTitle from "@/app/components/ui/SectionTitle/SectionTitle";

function OurMission() {
  return (
    <section className="bg-linear-to-br from-dark to-primary py-14">
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center py-6">
        <div>
          <h1 className={`text-white text-3xl md:text-4xl font-semibold`}>
            Our Mission
          </h1>
        </div>
        <div>
          <p className="text-lg md:text-xl text-white lg:max-w-200 leading-normal mx-auto">
            To make property buying transparent, accessible, and stress-free for
            everyone. Whether you're buying your first home or your tenth
            investment property, you deserve clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
