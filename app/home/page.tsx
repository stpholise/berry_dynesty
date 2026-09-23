import Image from "next/image";
const page = () => {
  return (
    <div className="bg-white">
      <div className="w-full h-[calc(100vh-60px)] bg-[url(/bg/cow.jpg)] bg-center bg-cover ">
        <div className="max-w-6xl my-auto py-20 mx-auto w-full px-4 sm:px-8">
          <h1 className=" text-4xl md:text-6xl py-4 font-dm-sans w-full md:w-130 text-whte font-semibold ">
            Welcome to{" "}
            <span className=" flex text-gold text-5xl  md:text-7xl">Berry Dynasty</span>{" "}
          </h1>
          <p className=" w-full text-lg md:text-2xl md:w-120 ">
            Discover the world of farm animals and sustainable agriculture
          </p>
        </div>
      </div>

      <div className="py-20 bg-green-suplight">
        <div className="max-w-6xl mx-auto flex-col flex gap-16">
          <div className=" text-center text-black px-4">
            <h3 className="text-5xl font-medium mb-4">
             Our Farm Animals
            </h3>
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

                  {/* Products */}
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

                  {/* Lifespan */}
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
      </div>

      <div className="py-20 px-8 max-w-6xl mx-auto text-black flex-col flex gap-16">
        <div className=" text-center">
          <h3 className="text-5xl font-medium mb-4">
            why choose <span className="  ">Berry Dynasty</span>
          </h3>
          <p className="">
            We&apos;re committed to sustainable farming practices and the wellbeing
            of our animals.
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
      </div>
    </div>
  );
};

const farmAnimals = [
  {
    id: "dairy-cows",
    name: "Dairy Cows",
    image: "/animals/cows.jpg",
    description:
      "Essential for milk production, dairy cows are among the most important farm animals. They require proper nutrition and care to produce high-quality milk.",
    products: ["Milk", "Cheese", "Butter"],
    lifespan: "18-22 years",
  },
  {
    id: "chickens",
    name: "Chickens",
    image: "/animals/chicken.jpg",
    description:
      "Versatile farm animals that provide both eggs and meat. They are relatively easy to raise and are perfect for small-scale farming operations.",
    products: ["Eggs", "Meat", "Feathers"],
    lifespan: "5-10 years",
  },
  {
    id: "pigs",
    name: "Pigs",
    image: "/animals/pig.jpg",
    description:
      "Intelligent and social animals that are raised primarily for meat production. They adapt well to various farming environments.",
    products: ["Pork", "Bacon", "Ham"],
    lifespan: "15-20 years",
  },
  {
    id: "sheep",
    name: "Sheep",
    image: "/animals/sheep.jpg",
    description:
      "Valued for their wool, meat, and milk. Sheep are hardy animals that thrive in various climates and terrains.",
    products: ["Wool", "Meat", "Milk"],
    lifespan: "10-12 years",
  },
  {
    id: "goats",
    name: "Goats",
    image: "/animals/goat.jpg",
    description:
      "Adaptable animals known for their milk, meat, and fiber production. They are excellent for brush control and small farms.",
    products: ["Milk", "Meat", "Fiber"],
    lifespan: "15-18 years",
  },
  {
    id: "turkeys",
    name: "Turkeys",
    image: "/animals/turkey.jpg",
    description:
      "Large poultry birds primarily raised for meat production. Turkeys are adaptable farm animals that can be raised in a variety of farming environments.",
    products: ["Meat", "Eggs", "Feathers"],
    lifespan: "3-5 years",
  },
  {
    id: "ducks",
    name: "Ducks",
    image: "/animals/duck.jpg",
    description:
      "Versatile poultry birds raised for their meat and eggs. Ducks are hardy, adaptable, and well suited to both small-scale and commercial farming.",
    products: ["Meat", "Eggs", "Feathers"],
    lifespan: "5-10 years",
  },
  {
    id: "snails",
    name: "Snails",
    image: "/animals/snail.jpg",
    description:
      "Snails are valued for their nutritious meat and are well suited to small-scale farming. They require relatively little space and can thrive in controlled farming environments.",
    products: ["Snail Meat", "Shells"],
    lifespan: "2-5 years",
  },
];

import { Leaf, Heart, Sprout, Users } from "lucide-react";

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
export default page;
