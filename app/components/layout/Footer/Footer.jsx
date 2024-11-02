import React from "react";
import logo from "@/app/assets/images/homepage/logo.png";
import Link from "next/link";
import image_1 from "@/app/assets/images/footer/1.webp";
import image_2 from "@/app/assets/images/footer/2.webp";
import image_3 from "@/app/assets/images/footer/3.webp";
import image_4 from "@/app/assets/images/footer/4.webp";
import { Instagram } from "@/app/assets/icons/Instagram";
import { Facebook } from "@/app/assets/icons/Facebook";
import { TikTok } from "@/app/assets/icons/TikTok";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pb-12 bg-slate-800">
      <div className="w-full flex flex-col text-center justify-center gap-4 sm:gap-12 py-4 sm:py-20 bg-gray-100">
        <h2 className="sm:text-6xl text-3xl text-slate-800 font-extrabold">
          Follow us on social.
        </h2>
        <Link
          href="#"
          target="_blank"
          className="text-slate-800 font-bold text-2xl"
        >
          @instagram
        </Link>
        <div className="flex justify-center items-center text-slate-800 gap-4">
          <Link href="#">
            <Instagram />
          </Link>
          <Link href="#">
            <Facebook />
          </Link>
          <Link href="#">
            <TikTok />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0">
        <div className="overflow-hidden">
          <img
            src={image_1.src}
            alt="Footer Image"
            className="w-full h-full object-cover object-center hover:scale-125 transition-all"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={image_2.src}
            alt="Footer Image"
            className="w-full h-full object-cover object-center hover:scale-125 transition-all"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={image_3.src}
            alt="Footer Image"
            className="w-full h-full object-cover object-center hover:scale-125 transition-all"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src={image_4.src}
            alt="Footer Image"
            className="w-full h-full object-cover object-center hover:scale-125 transition-all"
          />
        </div>
      </div>
      <div className="container flex justify-between sm:pt-20 pt-4 gap-4 sm:gap-0 flex-col sm:flex-row">
        <div className="flex justify-center">
          <nav className="flex justify-between">
            <ul className="flex sm:flex-col gap-4">
              <li>
                <Link href="/" className="text-lg">
                  Pocetna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-lg">
                  O nama
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-lg">
                  Galerija
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-center sm:gap-20 gap-4">
          <img src={logo.src} alt="Logo" className="object-contain w-36" />
          <p className="text-xl sm:flex hidden">Copyright @ 2024 WanderWay</p>
        </div>
        <div className="flex sm:justify-end justify-center">
          <ul className="flex flex-col sm:items-end items-center gap-4">
            <li>
              <Link
                href="mailto:drndica54@gmail.com"
                className="sm:text-right text-lg text-center"
              >
                contact@wanderway.com
              </Link>
            </li>
            <li>
              <Link
                href="tel:+3816012345678"
                className="sm:text-right text-lg text-center"
              >
                +3816012345678
              </Link>
            </li>
          </ul>
        </div>
        <p className="text-md text-center sm:hidden flex mx-auto">
          Copyright @ 2024 WanderWay
        </p>
      </div>
    </footer>
  );
};
export default Footer;
