 
import { Badge } from "lucide-react";
import { GoogleOneTap } from "@clerk/nextjs";
import Categories from "./_components/Categories";
import {
  Heart as HeartPulse,
  ShieldCheck,
  Truck,
  Wallet,
  Cat,
  ArrowRight,
  EllipsisIcon,
  // Play,
} from "@animateicons/react/lucide";
import CustomRequestButton from "@/app/_components/buttons/CustomRequestButton";
import ErrorWrapper from "@/app/_components/ErrorHanling/custom-error-boundry";
import FeaturedProducts from "./_components/FeaturedProducts";
import { Suspense } from "react";

type SourcingStep = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const page = async () => {
  return (
    <div className="bg-white relative">
      <GoogleOneTap />
      <div className=" relative  w-full h-[calc(100vh-50px)] bg-[url(/bg/cow.jpg)] bg-center bg-cover ">
        <div className="absolute z-10 inset-0 bg-linear-to-r from-black to-transparent" />
        <div className=" flex justify-center flex-col gap-8 sm:gap-12 absolute z-20 inset-0 max-w-6xl my-auto py-20 mx-auto w-full px-4 sm:px-8">
          <div className=" flex flex-col gap-4">
            <p className="text-xs px-2 py-1 rounded-3xl bg-dark-green w-fit flex gap-1 items-center mb-2">
              <Badge strokeWidth={3} className="size-3 text-white font-bold " />{" "}
              Hand-Sourced & Vet Inspected Animals
            </p>
            <h1 className=" text-dark-green text-2xl 2xs:text-3xl sm:text-4xl md:text-6xl pb-4 font-dm-sans w-full md:w-180 text-whte font-semibold ">
              <span className=" flex text-gold  text-2xl 2xs:text-3xl sm:text-4xl  md:text-6xl">
                Healthy Farm Animals Directly Sourced For You
              </span>{" "}
            </h1>
            <p className=" w-full text-lg md:text-xl md:w-140 ">
              Discover healthy, well-raised farm animals bred and cared for with
              quality, sustainability, and responsible farming at heart.
            </p>
          </div>
          <div className=" mt-3 sm:mt-8 flex 2xs:flex-row flex-col gap-6 sm:gap-4 sm:items-center "></div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-18 scrollbar-hide">
        <div className="flex overflow-x-auto scrollbar-hide">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex min-w-80 max-w-120 shrink-0 items-start gap-4 border-r-2 border-gray-200 last:border-r-0 px-6 py-7 first:pl-0"
              >
                <Icon size={40} className="shrink-0 text-dark-green" />

                <div className="flex flex-col gap-3">
                  <h5 className="text-xl font-semibold text-dark-green">
                    {item.title}
                  </h5>

                  <p className="text-base leading-relaxed text-gray-600">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" max-w-7xl mx-auto py-20 flex flex-col gap-16 px-4">
        <div className=" text-center  flex-col flex gap-3 max-w-2xl mx-auto ">
          <h4 className="text-gold text-sm font-semibold uppercase">
            The AgroSource Guarantee
          </h4>
          <h3 className="text-dark-green text-3xl font-semibold">
            How We Sourced Your Farm Animals
          </h3>
          <p className="text-base text-gray-600">
            We eliminate the hassle and risk of animal market sourcing. Every
            animal listed on our site goes through our strict 4-step sourcing
            protocol.
          </p>
        </div>
        <div className="steps-grid grid-cols-1  2xs:grid-cols-2  grid md:grid-cols-4 gap-4  text-gray-600">
          {sourcingSteps.map((step) => (
            <div
              key={step.id}
              className=" bg-gray-100 p-4 sm:p-6 flex flex-col gap-4 rounded-2xl "
            >
              <div className="size-10 sm:size-12 text-dark-green text-xl sm:text-3xl bg-green-light rounded-md p-2 flex items-center justify-center ">
                {step.id}
              </div>

              <h3 className="text-dark-green font-semibold text-lg sm:text-xl">
                {step.title}
              </h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
          <div className=" flex flex-col gap-8 sm:flex-row justify-between sm:gap-4 ">
            <div className="flex flex-col gap-3 ">
              <h6 className="uppercase text-sm font-semibold text-gold">
                Categories
              </h6>
              <h3 className=" text-3xl sm:text-4xl font-semibold text-dark-green">
                Browse Livestock By Species
              </h3>
            </div>
            <button className="mt-auto md:mb-2 text-bright-green font-semibold text-sm flex gap-2 items-center ">
              View All Livestock Catalog{" "}
              <ArrowRight size={16} className="size-3" />{" "}
            </button>
          </div>
          <Suspense
            fallback={
              <div className="flex justify-center py-12">
                <EllipsisIcon duration={4} className="animate-spin" />
                <span className="ml-2">Loading Categories...</span>
              </div>
            }
          >
            <ErrorWrapper title={"Error Fetching Categories"}>
              <Categories />
            </ErrorWrapper>
          </Suspense>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-30 px-4">
        <div className="">
          <h6 className="text-sm font-semibold text-gold uppercase">
            Hand-picked Listing
          </h6>
          <h3 className="text-3xl font-semibold text-dark-green mb-8 mt-2">
            Featured Sourced Animals
          </h3>
        </div>
        <Suspense
          fallback={
            <div className="flex justify-center py-12">
              <span className="ml-2">Loading Featured Products</span>
              <EllipsisIcon duration={4} className="animate-spin" />
            </div>
          }
        >
          <ErrorWrapper title={"Error fetching Featured Products"}>
            <FeaturedProducts />
          </ErrorWrapper>
        </Suspense>
      </div>

      <div className="py-20 bg-dark-green px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12  items-center justify-between">
          <div className="flex flex-col md:w-150  gap-2 max-w-3xl text-white">
            <h6 className="text-sm font-semibold text-gold uppercase">
              Can&apos;t find a specific breend or quantity?
            </h6>
            <h3 className="text-3xl font-semibold text-white capitalize">
              We Sourced Custom Orders For Commerciaal & Private Farms
            </h3>
            <p className="text-sm mt-4">
              Tell us your exact required specifications (breed, weight, age,
              quantity, health certificates) and our sourcing team will find and
              vet them for you.
            </p>
          </div>
          <CustomRequestButton />
        </div>
      </div>
    </div>
  );
};

// const farmAnimals = [
//   {
//     id: "dairy-cows",
//     name: "Dairy Cows",
//     image: "/animals/cows.jpg",
//     description:
//       "Essential for milk production, dairy cows are among the most important farm animals. They require proper nutrition and care to produce high-quality milk.",
//     products: ["Milk", "Cheese", "Butter"],
//     lifespan: "18-22 years",
//   },
//   {
//     id: "chickens",
//     name: "Chickens",
//     image: "/animals/chicken.jpg",
//     description:
//       "Versatile farm animals that provide both eggs and meat. They are relatively easy to raise and are perfect for small-scale farming operations.",
//     products: ["Eggs", "Meat", "Feathers"],
//     lifespan: "5-10 years",
//   },
//   {
//     id: "pigs",
//     name: "Pigs",
//     image: "/animals/pig.jpg",
//     description:
//       "Intelligent and social animals that are raised primarily for meat production. They adapt well to various farming environments.",
//     products: ["Pork", "Bacon", "Ham"],
//     lifespan: "15-20 years",
//   },
//   {
//     id: "sheep",
//     name: "Sheep",
//     image: "/animals/sheep.jpg",
//     description:
//       "Valued for their wool, meat, and milk. Sheep are hardy animals that thrive in various climates and terrains.",
//     products: ["Wool", "Meat", "Milk"],
//     lifespan: "10-12 years",
//   },
//   {
//     id: "goats",
//     name: "Goats",
//     image: "/animals/goat.jpg",
//     description:
//       "Adaptable animals known for their milk, meat, and fiber production. They are excellent for brush control and small farms.",
//     products: ["Milk", "Meat", "Fiber"],
//     lifespan: "15-18 years",
//   },
//   {
//     id: "turkeys",
//     name: "Turkeys",
//     image: "/animals/turkey.jpg",
//     description:
//       "Large poultry birds primarily raised for meat production. Turkeys are adaptable farm animals that can be raised in a variety of farming environments.",
//     products: ["Meat", "Eggs", "Feathers"],
//     lifespan: "3-5 years",
//   },
// ];

const features = [
  {
    icon: HeartPulse,
    title: "Quality & Healthy Livestock",
    text: "We provide healthy, well-cared-for livestock raised with proper nutrition, attention, and responsible farming practices.",
  },
  {
    icon: Truck,
    title: "Reliable Supply",
    text: "Count on us for a dependable supply of quality farm animals to meet the needs of farmers, families, and businesses.",
  },
  {
    icon: Wallet,
    title: "Competitive Pricing",
    text: "We offer quality livestock at fair and competitive prices, providing value for both small-scale and commercial buyers.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Service",
    text: "From selection to purchase, we provide professional and reliable service with a strong focus on customer satisfaction.",
  },
  {
    icon: Cat,
    title: "Breeding & Farm Support",
    text: "We support farmers with quality breeding stock and practical livestock solutions to help build productive and sustainable farms.",
  },
  {
    icon: Truck,
    title: "Delivery Options",
    text: "We offer convenient delivery options to help get your livestock safely and reliably to your preferred location.",
  },
];

const sourcingSteps: SourcingStep[] = [
  {
    id: 1,
    icon: "🔍",
    title: "On-Site Sourcing",
    description:
      "Our expert livestock buyers physically visit top ranches to inspect genetics, temperament, and build.",
  },
  {
    id: 2,
    icon: "🩺",
    title: "Full Vet Check",
    description:
      "Licensed veterinarians perform bloodwork, disease screening, deworming, and complete vaccinations.",
  },
  {
    id: 3,
    icon: "🏠",
    title: "Quarantine Station",
    description:
      "Animals spend 14 days in our holding facilities under optimal nutrition before listing.",
  },
  {
    id: 4,
    icon: "🚚",
    title: "Direct Door Delivery",
    description:
      "Shipped in specialized livestock trailers directly to your farm gate with arrival health logs.",
  },
];

export default page;
