"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Logo from "../Assets/cloud_windy_line.svg";
import IntImage from "../Assets/hot-air-balloon-5987843_1280.jpg";
import Adventurer from "../Assets/Adventurous Spirit_ Sunset Balloon Festival Selfie.jpg";
import Ballon1 from "../Assets/long-shot-multi-colored-hot-air-balloons-floating-mountains.jpg";
import Ballon2 from "../Assets/hot-air-balloon-5754924_1280.jpg";
import PropSyst from "../Assets/DALL·E 2024-09-02 01.47.53 - A detailed illustration of an electric propulsion system for a hot-air balloon. The image should show a modern hot-air balloon with an electric heatin.webp";
import BatteryTech from "../Assets/DALL·E 2024-09-02 02.00.15 - An illustration showcasing advanced battery technology in the context of a hot-air balloon. The image should feature a high-capacity battery system in.webp";
import ContactDecor from "../Assets/Vibrant Hot Air Balloon Festival Scene.jpg";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaCog } from "react-icons/fa";
import {
  FaArrowRight,
  FaCompass,
  FaEarthAmericas,
  FaGauge,
} from "react-icons/fa6";
import Button from "@/components/Button";
import Accordion from "@/components/Accordion";
import CustomerReviews from "@/components/CustomerReviews";

interface FAQ {
  question: string;
  answer: string;
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      // once: true,
    });
  }, []);

  const faqs: FAQ[] = [
    {
      question: "How does an electric hot-air balloon work?",
      answer:
        "Electric hot-air balloons work by using an electric heating system instead of propane burners. The electric heater warms the air inside the balloon, causing it to rise. This mechanism is similar to traditional hot-air balloons, but with the advantage of being silent and eco-friendly.",
    },
    {
      question: "Are electric hot-air balloons safe?",
      answer:
        "Yes, electric hot-air balloons are considered safe. They often come with advanced automated controls that help maintain optimal temperature and altitude more precisely. Additionally, they may be equipped with state-of-the-art navigation and communication systems, enhancing safety. By using electricity, these systems contribute to a cleaner environment, indirectly improving safety by reducing pollutants and potential hazards associated with traditional fuel sources.",
    },
    {
      question: "How long can an electric hot-air balloon fly?",
      answer:
        "The flight duration of an electric hot-air balloon depends on various factors such as battery capacity, weather conditions, and payload. Generally, electric hot-air balloons can fly for several hours, with some models capable of staying airborne for up to 4-6 hours. However, it's important to note that the actual flight time may vary and it's recommended to consult the manufacturer's specifications for specific details.",
    },
    {
      question:
        "What are the environmental benefits of electric hot-air balloons?",
      answer:
        "Electric hot-air balloons offer several environmental benefits. By using electricity as a power source, they reduce reliance on traditional fuel sources such as propane, which produce emissions and contribute to air pollution. This makes electric hot-air balloons more eco-friendly and sustainable. Additionally, the use of electric heating systems reduces noise pollution, making the flight experience quieter and more enjoyable for passengers and the surrounding environment. Overall, electric hot-air balloons provide a greener alternative for aviation enthusiasts and nature lovers alike.",
    },
    {
      question: "What happens if the battery runs out during a flight?",
      answer:
        "If the battery runs out during a flight, the electric hot-air balloon will lose power and start descending. Pilots are trained to handle such situations and have emergency procedures in place. They can make use of emergency landing sites or perform a controlled descent to a safe location. It's important to note that the battery capacity and flight planning play a crucial role in ensuring a safe and enjoyable flight experience. Regular maintenance and monitoring of the battery's charge level are essential to prevent unexpected power loss during a flight.",
    },
  ];

  return (
    <main className="mx-auto box-border flex flex-col items-center justify-between font-poppins selection:bg-brand selection:text-white">
      <header className="flex h-screen flex-col bg-hero-image bg-cover px-12 py-8 md:px-14 lg:px-16">
        <div className="absolute left-0 top-0 -z-0 h-full w-screen bg-gradient-to-b from-black/65 via-black/60 to-transparent"></div>
        {/* <Image className="object-cover" src={BG} alt="" width={100} /> */}
        <div className="z-10">
          <Navbar />
        </div>

        {/* Hero */}
        <div className="z-10 flex h-full flex-col items-center justify-center gap-8 text-center text-white">
          <h1 className="px-44 font-sans text-3xl font-semibold leading-snug md:px-52 md:text-5xl lg:px-60 lg:text-6xl">
            Revolutionizing the Skies with Sustainable{" "}
            <span className="text-brand">Electric Hot-Air Balloons.</span>
          </h1>
          <p className="text-md px-44 md:px-52 lg:px-60">
            Discover a new way to soar with our revolutionary electric hot-air
            balloons! Silent, eco-friendly, and breathtakingly beautiful, our
            balloons offer a sustainable adventure that lets you explore the
            skies without leaving a carbon footprint. Join us in redefining the
            future of flight—elevate your experience today!
          </p>

          <Button>
            View Product <FaArrowRight />
          </Button>
        </div>
      </header>

      {/* Intro */}
      <div
        data-aos="fade-up"
        className="flex w-full flex-col px-16 py-8 text-xl md:px-24 lg:px-32"
      >
        {/* Absolute positioned metrics bar */}
        <div className="-mt-16 mb-28 flex w-full columns-3 items-center justify-center rounded-2xl bg-white p-4 text-center shadow-2xl shadow-gray-200 md:-mt-20 md:mb-32 md:p-6 lg:-mt-24 lg:mb-36 lg:p-8">
          {/* Subscribers */}
          <div className="flex w-full flex-col gap-1 text-black">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              100k<span className="text-brand">+</span>
            </h2>
            <p>Subscribers</p>
          </div>

          {/* Users */}
          <div className="flex w-full flex-col gap-1 text-black">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              20k<span className="text-brand">+</span>
            </h2>
            <p>Active Users</p>
          </div>

          {/* Sales */}
          <div className="flex w-full flex-col gap-1 text-black">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              $2M<span className="text-brand">+</span>
            </h2>
            <p>Product Sold</p>
          </div>
        </div>

        {/* Intro details */}
        <div className="grid w-[100%] grid-cols-2 gap-28">
          {/* IMage */}
          <div
            className="flex items-center overflow-clip rounded-2xl md:h-[30rem] md:w-[30rem] lg:h-[42rem] lg:w-[42rem]"
            data-aos="fade-right"
          >
            <Image
              src={IntImage}
              alt="Just some balloon"
              className="w-full scale-150"
            />
          </div>

          {/* Text */}
          <div
            data-aos="fade-left"
            className="flex w-full flex-col items-start justify-center gap-8 text-left text-black"
          >
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              Movement made faster and easier
            </h2>
            <p>
              A hot-air balloon is a type of aircraft that consists of a large
              fabric envelope filled with heated air and a basket or gondola
              that carries passengers or cargo. The balloon rises because heated
              air inside the envelope is less dense than the cooler air outside,
              creating lift. Traditional hot-air balloons use propane burners to
              heat the air, while modern electric hot-air balloons use electric
              heaters powered by batteries.
            </p>

            <Button>
              Read More <FaArrowRight />
            </Button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-24 flex w-full flex-col bg-[#FCF7EE] px-16 py-16 text-black md:px-24 lg:px-32">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
          Our Features
        </h2>

        {/* Details */}
        <div className="grid columns-2 grid-cols-2 gap-x-32 gap-y-16 py-16 text-base md:text-lg lg:text-xl">
          {/* feature 1 */}
          <div data-aos="fade-right" className="flex w-full flex-col gap-6">
            {/* Icon */}
            <FaCog className="text-amber-700" size={30} />
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              Automatic Controls
            </h3>
            <p>
              Electric systems often come with advanced automated controls that
              can help maintain optimal temperature and altitude more precisely,
              reducing the risk of human error.
            </p>
          </div>

          {/* feature 2 */}
          <div data-aos="fade-left" className="flex w-full flex-col gap-6">
            {/* Icon */}
            <FaGauge className="text-amber-700" size={30} />
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              Real-Time Monitoring
            </h3>
            <p>
              Many electric systems offer real-time monitoring of critical
              parameters, such as temperature and pressure, which can provide
              early warnings of potential issues and allow for timely
              intervention.
            </p>
          </div>

          {/* feature 3 */}
          <div data-aos="fade-right" className="flex w-full flex-col gap-6">
            {/* Icon */}
            <FaCompass className="text-amber-700" size={30} />
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              Advanced Navigation and Communication
            </h3>
            <p>
              Electric hot-air balloons may be equipped with state-of-the-art
              navigation and communication systems, which enhance safety by
              providing better situational awareness and emergency communication
              capabilities.
            </p>
          </div>

          {/* feature 4 */}
          <div data-aos="fade-left" className="flex w-full flex-col gap-6">
            {/* Icon */}
            <FaEarthAmericas className="text-amber-700" size={30} />
            <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
              Eco-Friendly Operation
            </h3>
            <p>
              By using electricity, these systems contribute to a cleaner
              environment, which indirectly improves safety by reducing
              pollutants and potential hazards associated with traditional fuel
              sources.
            </p>
          </div>
        </div>
      </div>

      {/* Visuals */}
      <div className="mt-24 flex w-full flex-col gap-16 px-16 py-8 md:px-24 lg:px-32">
        {/* Title and CTA */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
            Visuals
          </h2>
          <Button>
            See More <FaArrowRight />
          </Button>
        </div>
        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-16">
          {/* First Column */}
          <div
            data-aos="fade-right"
            className="h-[18rem] overflow-clip rounded-[2rem] md:h-[40rem] lg:h-[52rem]"
          >
            <Image
              src={Adventurer}
              alt="Adventurous Spirit"
              className="-mt-14 w-full md:-mt-20 lg:-mt-44"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col justify-between">
            <div
              data-aos="fade-left"
              className="h-[8rem] overflow-clip rounded-[2rem] md:h-[14rem] lg:h-[24rem]"
            >
              <Image
                src={Ballon1}
                alt="Long Shot"
                className="lg:-mt-18 -mt-10 w-full md:-mt-12"
              />
            </div>
            <div
              data-aos="fade-left"
              className="h-[8rem] overflow-clip rounded-[2rem] md:h-[14rem] lg:h-[24rem]"
            >
              <Image
                src={Ballon2}
                alt="Vibrant"
                className="lg:-mt-18 -mt-10 w-full md:-mt-12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* How it Works */}
      <div className="mt-24 flex w-full flex-col gap-16 bg-[#FCF7EE] px-16 py-8 text-black md:px-24 lg:px-32">
        {/* Title CTA */}
        <div className="flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold text-black md:text-3xl lg:text-4xl">
            How it Works
          </h2>
          <Button>
            Read All <FaArrowRight />
          </Button>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-48 text-base md:text-lg lg:text-xl">
          {/* Prop System */}
          <div className="grid w-full justify-items-center gap-8">
            {/* Image */}
            <div
              className="h-48 w-48 overflow-clip rounded-3xl"
              data-aos="fade-up"
            >
              <Image
                src={PropSyst}
                alt="Propulsion System"
                className="w-full"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-medium lg:text-2xl">
              Electric Propulsion System:
            </h3>
            <ul className="flex list-disc flex-col gap-4">
              <li data-aos="fade-right">
                Instead of using propane burners like traditional hot-air
                balloons, electric hot-air balloons use an electric heating
                system. This system is powered by batteries or a renewable
                energy source like solar panels.
              </li>

              <li data-aos="fade-right">
                The electric heater warms the air inside the balloon, causing it
                to rise, just like in conventional balloons.
              </li>
            </ul>
          </div>

          {/* Battery Tech */}
          <div className="grid w-full justify-items-center gap-8">
            {/* Image */}
            <div
              className="h-48 w-48 overflow-clip rounded-3xl"
              data-aos="fade-up"
            >
              <Image
                src={BatteryTech}
                alt="Battery Technology"
                className="w-full"
              />
            </div>

            {/* Text */}
            <h3 className="text-xl font-medium lg:text-2xl">
              Advanced Battery Technology:
            </h3>
            <ul className="flex list-disc flex-col gap-4">
              <li data-aos="fade-left">
                High-capacity batteries store energy to power the electric
                heater. These batteries are designed to be lightweight yet
                powerful enough to sustain flight for extended periods.
              </li>

              <li data-aos="fade-left">
                They can be recharged between flights, often using renewable
                energy sources, further reducing the environmental impact.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Contact us */}
      <div className="mt-24 flex columns-2 justify-center gap-32 px-16 py-8 text-xl text-black md:px-24 md:text-2xl lg:px-32 lg:text-3xl">
        {/* Text */}
        <div className="flex w-full flex-col justify-center gap-8">
          <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
            Contact Us
          </h2>
          <p className="font-light">
            Email or call to learn how to get your own balloon
          </p>
          <a
            href="mailto:homeland@gmail.com"
            className="font-medium"
            data-aos="fade-right"
          >
            Homeland@gmail.com
          </a>
          <a
            href="tel:32333334545"
            className="font-medium"
            data-aos="fade-right"
          >
            323-3333-4545
          </a>
        </div>

        {/* Image */}
        <div
          data-aos="fade-left"
          className="h-[32rem] w-full overflow-clip rounded-3xl"
        >
          <Image src={ContactDecor} alt="Contact Us" className="w-full" />
        </div>
      </div>

      {/* HELP */}
      <div className="mt-24 flex w-full flex-col gap-16 bg-[#FCF7EE] px-16 py-16 text-black md:px-24 lg:px-32">
        {/* Title */}
        <h2 className="las text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
          Help Center
        </h2>

        {/* FAQs */}
        {faqs.map((faq, index) => (
          <Accordion key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>

      {/* Reviews */}
      <div className="mt-24 flex w-full flex-col gap-16 px-16 py-8 text-black md:px-24 lg:px-32">
        {/* Title */}
        <h2 className="text-center text-2xl font-semibold md:text-3xl lg:text-4xl">
          See What other customers had to say
        </h2>

        {/* Review Cards */}
        <div className="mx-auto mt-10 max-w-full">
          <CustomerReviews />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 flex w-full flex-col justify-between bg-brand2 py-8 text-lg text-white md:px-16 lg:px-32 lg:text-xl">
        {/* Details */}
        <div className="grid grid-cols-5 gap-16 lg:gap-32">
          {/* col1 */}
          <div className="col-span-2 flex flex-col space-y-5">
            <a
              href="/"
              className="flex w-full items-center gap-2 text-2xl font-semibold md:text-3xl lg:text-4xl"
            >
              <Image src={Logo} alt="Homeland" width={40} height={40} />
              <h4>Homeland</h4>
            </a>
            <p>
              Homleand is a pioneering platform dedicated to offering
              eco-friendly and innovative electric hot-air balloon experiences.
              Our mission is to redefine the future of flight by combining
              cutting-edge electric propulsion technology with a commitment to
              sustainability.
            </p>
          </div>

          {/* col2 */}
          <div className="mt-10 flex flex-col space-y-5 md:mt-14 lg:mt-16">
            <h4 className="font-semibold">Company</h4>
            <p>About Us</p>
            <p>Product</p>
            <p>Book Ride</p>
          </div>

          {/* col3 */}
          <div className="mt-10 flex flex-col space-y-5 md:mt-14 lg:mt-16">
            <h4 className="font-semibold">Support</h4>
            <p>Service</p>
            <p>Contact Us</p>
            <p>Visuals</p>
            <p>Testimonials</p>
          </div>

          {/* col4 */}
          <div className="mt-10 flex flex-col space-y-5 md:mt-14 lg:mt-16">
            <h4 className="font-semibold">Contact</h4>
            <p>222-233-1111</p>
            <p>Homeland@gmail.com</p>
          </div>
        </div>

        {/* copyright */}
        <div className="mb-8 mt-16 flex w-full justify-center text-center">
          <p className="font-semibold">
            Copyright © 2024 Homeland Company S.L. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
