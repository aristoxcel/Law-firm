"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navitems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Case Studies",
      path: "/case",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div
      className={`navbar bg-gray-900 relative sticky top-0 z-[999]  ${
        scrolled ? "bg-gray-900" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto navbar">
        <div className="navbar-start">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="logo"
              width={70}
              height={60}
              className="rounded-full border-2 border-primary border-t-green-600"
            ></Image>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="flex gap-6">
            {navitems.map((item) => (
              <div
                key={item.path}
                className="text-secondary font-semibold hover:text-primary lg:px-3"
              >
                <Link href={item.path}>{item.title}</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="navbar-end text-secondary">
          <a className="btn btn-primary">Appointment</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
