"use client";
import Image from "next/image";
import { Leaf, Heart, Sprout, Users, Badge } from "lucide-react";
import PryButton from "../_components/buttons/PryButton";
import { ArrowRight, Play } from "@animateicons/react/lucide";
import {
  Heart as HeartPulse,
  ShieldCheck,
  Truck,
  Wallet,
  Cat,
} from "@animateicons/react/lucide";
import clsx from "clsx";
import LivestockCard from "../_components/LivestockCard";

type SourcingStep = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export interface LivestockProduct {
  id: number;
  name: string;
  category: string;
  image: string;
  location: string;
  weight: string;
  age: string;
  price: number;
  currency: string;
}

const page = () => {
  return (
    <div className="bg-white relative">
      <div className=" relative  w-full h-[calc(100vh-50px)] bg-[url(/bg/cow.jpg)] bg-center bg-cover ">
        <div className="absolute z-10 inset-0 bg-linear-to-r from-black to-transparent" />
        <div className=" flex justify-center flex-col gap-12 absolute z-20 inset-0 max-w-6xl my-auto py-20 mx-auto w-full px-4 sm:px-8">
          <div className=" flex flex-col gap-4">
            <p className="text-xs px-2 py-1 rounded-3xl bg-dark-green w-fit flex gap-1 items-center mb-2">
              <Badge strokeWidth={3} className="size-3 text-white font-bold " />{" "}
              Hand-Sourced & Vet Inspected Animals
            </p>
            <h1 className=" text-dark-green text-4xl md:text-6xl pb-4 font-dm-sans w-full md:w-180 text-whte font-semibold ">
              <span className=" flex text-gold text-5xl  md:text-6xl">
                Healthy Farm Animals Directly Sourced For You
              </span>{" "}
            </h1>
            <p className=" w-full text-lg md:text-xl md:w-140 ">
              Discover healthy, well-raised farm animals bred and cared for with
              quality, sustainability, and responsible farming at heart.
            </p>
          </div>
          <div className=" mt-8 flex gap-4 items-center ">
            <PryButton text={"Explore Our Animals"} />
            <button className="flex cursor-pointer items-center gap-2 font-medium">
              <Play
                duration={0.8}
                className="size-8 backdrop-blur-2xl p-1 border-2 rounded-full flex items-center"
              />
              Explore our Farm
            </button>
          </div>
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
          <h4 className="text-gold text-sm font-semibold">
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
        <div className="steps-grid  grid grid-cols-4 gap-4  text-gray-600">
          {sourcingSteps.map((step) => (
            <div
              key={step.id}
              className=" bg-gray-100 p-6 flex flex-col gap-4 rounded-2xl "
            >
              <div className=" size-12 text-dark-green text-3xl bg-green-light rounded-md p-2 flex items-center justify-center ">
                {step.id}
              </div>

              <h3 className="text-dark-green font-semibold text-xl">
                {step.title}
              </h3>
              <p className="text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="py-20 w-full bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col gap-16">
          <div className=" flex flex-row justify-between gap-4 ">
            <div className="flex flex-col gap-3 ">
              <h6 className="uppercase text-sm font-semibold text-gold">
                Categories
              </h6>
              <h3 className="text-4xl font-semibold text-dark-green">
                Browse Livestock By Species
              </h3>
            </div>
            <button className="mt-auto md:mb-2 text-bright-green font-semibold text-sm flex gap-2 items-center ">
              View All Livestock Catalog{" "}
              <ArrowRight size={16} className="size-3" />{" "}
            </button>
          </div>
          <div className="grid grid-cols-4   justify-between gap-16">
            {livestockCategories.map((items, i) => (
              <div
                className="border-2  hover:border-bright-green/50 transition duration-300 ease-in-ou group rounded-2xl bg-white p-4 flex flex-col gap-1 items-center"
                key={i}
              >
                <div
                  className={clsx(
                    " rounded-full mx-auto size-16 flex items-center my-3 justify-center transition duration-300 ease-in-ou ",
                    items.bg,
                  )}
                >
                  <Image
                    src={items.icon}
                    width={40}
                    height={40}
                    alt={items.name}
                    className="size-10"
                  />
                </div>
                <h6 className="text-black text-base font-semibold">
                  {items.name}
                </h6>
                <p className="text-sm text-gray-600">{items.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-30 px-4">
        <div className="">
          <h6 className="text-sm font-semibold text-gold uppercase">
            Hand-picked Listing
          </h6>
          <h3 className="text-3xl font-semibold text-dark-green mb-6 mt-2">
            Featured Sourced Animals
          </h3>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {livestockProducts.map((product, i) => (
            <LivestockCard product={product} key={i} />
          ))}
        </div>
      </div>

      <div className="py-20 bg-dark-green px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex flex-col w-150  gap-4 max-w-3xl text-white">
            <h6 className="text-sm font-semibold text-gold uppercase">
              Can&apos;t find a specific breend or quantity?
            </h6>
            <h3 className="text-4xl font-semibold text-white capitalize">
              We Sourced Custom Orders For Commerciaal & Private Farms
            </h3>
            <p className="text-base mt-3">
              Tell us your exact required specifications (breed, weight, age,
              quantity, health certificates) and our sourcing team will find and
              vet them for you.
            </p>
          </div>
          <button className="bg-bright-green h-fit w-fit px-4 py-2  rounded-md">
            Submit Custom Request
          </button>
        </div>
      </div>

      {/*    <div className="py-20 bg-green-suplight">
        <div className="max-w-6xl mx-auto flex-col flex gap-16">
          <div className=" text-center text-black px-4">
            <h3 className="text-5xl font-medium mb-4">Our Farm Animals</h3>
            <p className="">
              Learn about the different animals we raise and the important role
              they play in sustainable farming
            </p>
          </div>

          <div className=" grid grid-cols-1 2xs:grid-cols-2 px-4 md:grid-cols-3 gap-4 md:gap-8">
            {farmAnimals.map((animal, i) => (
              <div
                className="w-full rounded-2xl shadow-sm bg-gray-100 overflow-hidden"
                key={i}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={animal.image}
                    width={200}
                    height={120}
                    alt={animal.name}
                    className={"cover w-full h-64 object-cover"}
                  />
                </div>
                <div className=" p-4 md:p-6">
                  <h3 className="text-2xl font-semibold text-green-950">
                    {animal.name}
                  </h3>

                  <p className="mt-3 text-gray-600">{animal.description}</p>
 
                  <div className="mt-5">
                    <p className="font-medium text-gray-900">Products:</p>

                    <div className="mt-2 flex flex-wrap gap-2">
                      {animal.products.map((product) => (
                        <span
                          key={product}
                          className="rounded-full bg-green-50 px-3 py-1 text-sm text-green-800"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>
 
                  <div className="mt-5 border-t pt-4">
                    <p className="text-sm text-gray-500">Average Lifespan</p>

                    <p className="mt-1 font-medium text-gray-900">
                      {animal.lifespan}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* <div className="py-20 px-8 max-w-6xl mx-auto text-black flex-col flex gap-16">
        <div className=" text-center">
          <h3 className="text-5xl font-medium mb-4">
            why choose <span className="  ">Berry Dynasty</span>
          </h3>
          <p className="">
            We&apos;re committed to sustainable farming practices and the
            wellbeing of our animals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4  gap-8">
          {farmingValues.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex flex-col  items-center gap-4 rounded-lg text-center bg-green-suplight py-8 px-4 "
              >
                <Icon
                  size={32}
                  className="size-14 p-3 rounded-full text-bright-green bg-green-light"
                />

                <h3 className="text-xl font-dm-sans">{item.title}</h3>

                <p>{item.description}</p>
              </div>
            );
          })}
        </div>
      </div> */}
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

export const farmingValues = [
  {
    title: "Sustainable Farming",
    description:
      "We practice environmentally responsible farming methods that protect our land for future generations.",
    icon: Leaf,
  },
  {
    title: "Animal Welfare",
    description:
      "Our animals are treated with care and respect, ensuring their health and happiness.",
    icon: Heart,
  },
  {
    title: "Organic Practices",
    description:
      "We use natural methods and avoid harmful chemicals in our farming operations.",
    icon: Sprout,
  },
  {
    title: "Community Focus",
    description:
      "We support local communities and provide educational opportunities about sustainable agriculture.",
    icon: Users,
  },
];

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

const livestockCategories = [
  {
    id: 1,
    icon: "/icons/cow.svg",
    name: "Cattle",
    subtitle: "Bulls, Heifers, Dairy",
    bg: "bg-green-100/60 group-hover:bg-green-200/60",
  },
  {
    id: 2,
    icon: "/icons/ram.svg",
    name: "Goats & Sheep",
    subtitle: "Boer, Dorper, Kiko",
    bg: "bg-amber-200/60 group-hover:bg-amber-300/70",
  },
  {
    id: 3,
    icon: "/icons/pig.svg",
    name: "Swine / Pigs",
    subtitle: "Duroc, Yorkshire, Landrace",
    bg: "bg-pink-200/60 group-hover:bg-pink-300/80",
  },
  {
    id: 4,
    icon: "/icons/egg.svg",
    name: "Poultry",
    subtitle: "Layers, Broilers, Turkeys",
    bg: "bg-orange-600/60 group-hover:bg-orange-600/80",
  },
];

export const livestockProducts: LivestockProduct[] = [
  {
    id: 1,
    name: "Fullblood Boer Goat Buck",
    category: "Goats",
    image: "/animals/goat.jpg",
    location: "Red River Valley, OK",
    weight: "185 lbs",
    age: "14 Months",
    price: 680,
    currency: "$",
  },
  {
    id: 2,
    name: "Dairy Cow",
    category: "Cattle",
    image: "/animals/cow.jpg",
    location: "Berry Dynasty Farm",
    weight: "1,100 lbs",
    age: "24 Months",
    price: 1850,
    currency: "$",
  },
  {
    id: 3,
    name: "Large White Pig",
    category: "Pigs",
    image: "/animals/pig.jpg",
    location: "Berry Dynasty Farm",
    weight: "220 lbs",
    age: "10 Months",
    price: 750,
    currency: "$",
  },
  {
    id: 4,
    name: "Dorper Sheep",
    category: "Sheep",
    image: "/animals/sheep.jpg",
    location: "Berry Dynasty Farm",
    weight: "145 lbs",
    age: "12 Months",
    price: 520,
    currency: "$",
  },
  {
    id: 5,
    name: "Turkey",
    category: "Poultry",
    image: "/animals/turkey.jpg",
    location: "Berry Dynasty Farm",
    weight: "28 lbs",
    age: "7 Months",
    price: 180,
    currency: "$",
  },
];

export default page;
