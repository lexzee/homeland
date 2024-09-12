import Image from "next/image";
import Logo from "../Assets/cloud_windy_line.svg";
import Button from "./Button";

export default function Navbar() {
  return (
    // <nav className="container mx-auto flex w-screen items-center justify-between px-12 py-0 text-white columns-2">
    <nav className="flex columns-3 items-center text-white">
      {/* Logo */}
      <a
        href="/"
        className="flex w-full items-center gap-2 text-2xl font-semibold md:text-3xl lg:text-4xl"
      >
        <Image src={Logo} className="w-6 md:w-8 lg:w-10" alt="Homeland" />
        <h1>Homeland</h1>
      </a>

      {/* Navigation links */}
      <ul className="box-content flex w-full items-center justify-center gap-8 rounded-full bg-white bg-opacity-10 px-10 py-3 text-lg text-gray-200 md:gap-10 md:px-12 lg:gap-12 lg:px-14 lg:py-4">
        <li className="hover:font-semibold hover:text-white">
          <a href="/">Home</a>
        </li>
        <li className="hover:font-semibold hover:text-white">
          <a href="/shop">Shop</a>
        </li>
        <li className="hover:font-semibold hover:text-white">
          <a href="/about">About</a>
        </li>
        <li className="hover:font-semibold hover:text-white">
          <a href="/about">About</a>
        </li>
        <li className="hover:font-semibold hover:text-white">
          <a href="/services">Services</a>
        </li>
        <li className="hover:font-semibold hover:text-white">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* CTA */}
      <div className="flex w-full items-center justify-end">
        <Button>Book a Ride</Button>
      </div>
    </nav>
  );
}
