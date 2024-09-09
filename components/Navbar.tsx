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
        className="flex w-full items-center gap-2 text-4xl font-semibold"
      >
        <Image src={Logo} alt="Homeland" width={40} height={40} />
        <h1>Homeland</h1>
      </a>

      {/* Navigation links */}
      <ul className="box-content flex w-full items-center justify-center gap-12 rounded-full bg-white bg-opacity-10 px-14 py-4 text-lg text-gray-200">
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
