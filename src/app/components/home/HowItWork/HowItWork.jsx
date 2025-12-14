import SectionTitle from "../../ui/SectionTitle/SectionTitle";

export const workFlow = [
  "Enter the property address",
  "We gather official UK open data",
  "A human expert reviews & prepares your report",
  "You receive your full report the same day",
];

function HowItWork() {
  return (
    <section className="bg-linear-to-br from-dark to-primary py-14 mb-12">
      <div className="max-w-310 mx-auto w-[92%] lg:w-11/12 text-center space-y-6 flex flex-col items-center py-6">
        <div className="pb-12">
          <SectionTitle title={"How It Works"} color={"text-white"} />
        </div>
        <div>
          <ul className="flex flex-col md:flex-row items-start justify-center gap-6">
            {workFlow.map((w, i) => (
              <li
                key={i}
                className="flex flex-1 flex-col items-center gap-4 text-center"
              >
                <div className="w-20 h-20 flex items-center justify-center text-3xl rounded-full font-bold bg-linear-to-tl from-[#742ee6] to-[#b38af5] text-white">
                  {i + 1}
                </div>
                <p className="text-white">{w}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default HowItWork;
