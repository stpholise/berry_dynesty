import clsx from "clsx";
import Image from "next/image";

const page = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto text-center text-gray-500 px-3 py-30">
        <h1 className="text-4xl text-bright-green font-semibold py-2">
          {" "}
          About Berry Dynasty <span>Agro Integrated Services</span>
        </h1>
        <p className="text-2xl text-dark-green">
          Connecting buyers and farmers directly with healthy, top-breed farm
          animals.
        </p>
        <div className=" flex flex-col gap-3 py-4 text-base">
          <p className="">
            Berry Dynasty was founded to solve a critical issue for farmers and
            livestock buyers: finding healthy, disease-free, high-productivity
            farm animals without spending weeks driving between remote ranches.
          </p>
          <p className="">
            We work directly with certified livestock breeders across the
            country. Our team handles physical inspection, health quarantine,
            vet certification, and door-to-door climate-controlled delivery.
          </p>
        </div>
      </div>

      <div className="pb-20">
        <div className="max-w-xl mx-auto py-20 flex flex-col gap-4 px-4">
          <h6 className="text-sm uppercase text-center text-bright-green font-semibold">quality Assurance</h6>
          <h2 className="text-4xl text-center capitalize text-dark-green font-semibold">How We Source Our Animals</h2>
          <p className="text-lg text-gray-500 text-center">
            We cut out the middlemen and risky animal auctions by sourcing
            healthy, high-genetics livestock straight from verified breeding
            ranches.
          </p>
        </div> 
        <div className="flex flex-col gap-8 p-4">
          {steps.map((step, i) => (
            <div
              className={clsx(" rounded-md p-4 flex items-center gap-8 max-w-4xl mx-auto flex-col shadow-sm ",i % 2 ? "md:flex-row" : " md:flex-row-reverse")}
              key={i}
            >
              <Image
                src={step.image}
                alt={step.imageAlt}
                width={400}
                height={100}
                className="rounded-2xl object-cover h-70 w-100 shadow-md border-gray-200 border"
              />
              <div className="flex flex-col gap-3 ">
                <h4 className="text-xs font-semibold bg-bright-green w-fit px-2 py-0.5 rounded-2xl">
                  Step{i + 1}
                </h4>
                <h3 className="text-3xl font-semibold text-dark-green">
                  {step.title}
                </h3>
                <p className="text-base text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const steps = [
  {
    step: 1,
    title: "On-Site Breeder Audits",
    description:
      "Our experienced livestock buyers physically visit top pasture farms to select top animals based on weight, structure, mothering ability, and temperament.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Veterinary inspection",
  },
  {
    step: 2,
    title: "Vet Testing & Vaccinations",
    description:
      "Every animal undergoes bloodwork, parasite treatment, and full vaccination boosters administered by accredited veterinarians before leaving the sourcing farm.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Veterinary care for livestock",
  },
  {
    step: 3,
    title: "Safe Climate-Controlled Transport",
    description:
      "We utilize air-ventilated livestock haulers with clean bedding and hydration stops, delivering healthy animals straight to your farm gate.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageAlt: "Safe livestock transport",
  },
  {
    step: 4,
    title: "Farm Arrival & Health Check",
    description:
      "Upon arrival, each animal is carefully inspected and given time to settle into its new environment while our team confirms its health and condition.",
    image:
      "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Livestock arriving at a farm",
  },
  {
    step: 5,
    title: "After-Sale Support",
    description:
      "We provide guidance on feeding, housing, health management, and settling-in practices to help your animals adapt and thrive on your farm.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Healthy livestock on a farm",
  },
];

export default page;
