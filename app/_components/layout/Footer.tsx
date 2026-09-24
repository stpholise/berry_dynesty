"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
} from "@animateicons/react/lucide";

const Footer = () => {
  return (
    <div className="pb-12 ">
      <div className=" max-w-6xl mx-auto px-10  ">
        <div className=" flex flex-col lg:flex-row  justify-between w-full px-1 gap-25 lg:gap-50 py-20  border-b-2 border-b-gray-500">
          <div className="text-lg lg:w-120 font-medium font-dm-sans  ">
            <Image
              src={"/logo_flex.png"}
              width={220}
              height={100}
              alt={"logo"}
              className="w-40 h-20 "
            />
            <p className=" py-4 text-base">
              Dedicated to sustainable farming and animal welfare since 2000.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-start flex-wrap  xs:justify-between  lg:justify-end gap-12 lg:gap-28   w-full  ">
            {navColumns.map((col, i) => (
              <div
                key={i}
                className=" flex flex-col gap-4 items-start xl:w-40 "
              >
                <h4 className="mb-3 text-foreground font-medium font-dm-sans text-xl">
                  {col.title}
                </h4>
                {col.items.map((item, i) => (
                  <Link key={i} href={item.url} className="text-gray-400">
                    {item.name}
                  </Link>
                ))}
              </div>
            ))}

            <div className=" flex flex-col gap-4 items-start xl:w-60 ">
              <h4 className="mb-3 text-foreground font-medium font-dm-sans text-xl">
                Contact us
              </h4>
              {contactUs.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={i}
                    href={item.url}
                    className="text-gray-400 flex items-center gap-3"
                  >
                    <Icon
                      duration={0.8}
                      className="size-8 p-2 flex items-center justify-center rounded-full bg-white/10 text-bright-green"
                    />
                    <span className="">{item.text}</span>
                  </Link>
                );
              })}
              <div className="flex gap-3 my-4">
                {socialMedia.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link key={i} href={item.url}>
                      <Icon
                        duration={0.8}
                        className="size-10 p-2 flex items-center justify-center rounded-md bg-white/10 text-bright-green"
                      />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="py-6 flex justify-between">
          <p className="text-xs text-gray-300">
            &copy; Made by <span className="text-primary">Olise Stephen</span> -
            Powered by <span className="text-primary">Nextjs</span>
          </p>
          <div className="flex gap-8 text-gray-400 text-xs">
            <p className="">Impressum</p>
            <p className="">Datenschutz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const quickLinks = [
  {
    name: "Home",
    url: "/home",
  },
  {
    name: "About us",
    url: "/about",
  },
  {
    name: "Our Animals",
    url: "/animals",
  },
  {
    name: "Support",
    url: "/support",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

const contactUs = [
  {
    title: "email",
    text: "example@gmail.com",
    url: "mailto:example@gmail.com",
    icon: Mail,
  },
  {
    title: "phone",
    text: "+1234556780",
    url: "tel:+2347069309340",
    icon: Phone,
  },
  {
    title: "location",
    text: "office and farm address",
    url: "geo:37.7749,-122.4194",
    icon: MapPin,
  },
];

const socialMedia = [
  {
    icon: Twitter,
    name: "Twitter",
    url: "feature",
  },
  {
    icon: Facebook,
    name: "Facebook",
    url: "feature",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "feature",
  },
];

export default Footer;

const navColumns: {
  title: string;
  items: {
    name: string;
    url: string;
  }[];
}[] = [
  {
    title: "Quick Links",
    items: quickLinks,
  },
];
