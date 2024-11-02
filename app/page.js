"use client";
import React from "react";
import why_image from "@/app/assets/images/homepage/why-image.webp";
import first from "@/app/assets/images/homepage/1.webp";
import second from "@/app/assets/images/homepage/2.webp";
import explore from "@/app/assets/images/homepage/12.webp";
import banner from "@/app/assets/images/homepage/unsplash-image.webp";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full">
      <div className="bg-gray-100 sm:py-20 py-12">
        <div className="container mx-auto flex flex-col sm:gap-40 gap-12 px-4 sm:px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 sm:gap-y-12 sm:text-left text-center sm:w-4/6">
              <h1 className="text-teal-600 sm:text-7xl text-5xl font-bold">
                Explore Nature, Discover Your Trail!
              </h1>
              <p className="text-teal-600 font-light">
                Discover the ultimate hiking experience with TrailBlaze Inc. Our
                innovative app connects outdoor enthusiasts to nature while
                promoting exploration, adventure, and sustainable practices for
                unforgettable journeys.
              </p>
              <Link href="#" className="text-teal-600">
                <button className="border-2 border-slate-800 uppercase py-4 px-12">
                  find out more
                </button>
              </Link>
            </div>
            <img
              src={banner.src}
              alt="Sport Image"
              className="w-fit object-cover"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <img
              src={explore.src}
              alt="Sport Image"
              className="w-fit h-full object-cover object-center"
            />
            <div className="flex flex-col sm:items-end items-center gap-4 sm:gap-y-12 sm:w-4/6 sm:justify-self-end">
              <h2 className="text-teal-600 sm:text-6xl text-4xl font-bold sm:text-right text-center">
                About us
              </h2>
              <p className="text-teal-600 font-light sm:text-right text-center">
                At TrailBlaze Inc., we are dedicated to enhancing the hiking
                experience for outdoor enthusiasts through innovative
                technology. Founded in 2023, our mission is to connect people
                with nature, promoting exploration and environmental awareness.
                Our cutting-edge hiking app provides detailed trail information,
                personalized recommendations, and fosters sustainable hiking
                practices. Our diverse team of outdoor enthusiasts, technology
                experts, and environmental advocates collaborates to create a
                user-friendly platform that resonates with adventurers of all
                skill levels. We believe in the seamless integration of
                technology and nature, inviting users to embark on memorable
                hiking journeys while preserving the beauty of the great
                outdoors. Join us today!
              </p>
              <Link href="#" className="text-teal-600">
                <button className="border-2 border-slate-800 uppercase py-4 px-12">
                  find out more
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-600">
        <div className="sm:w-7/12 flex flex-col gap-12 justify-center items-center sm:py-20 py-12 px-4 mx-auto">
          <h2 className="sm:text-7xl text-5xl text-white text-center font-bold">
            Our Team.
          </h2>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={first.src}
                alt="Member Image"
                className="w-full sm:h-96 max-h-72 object-cover object-center"
              />
              <h3 className="text-2xl">Emily Johnson</h3>
              <p className="font-light">Technologist</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={second.src}
                alt="Member Image"
                className="w-full sm:h-96 max-h-72 object-cover object-center"
              />
              <h3 className="text-2xl">Emily Johnson</h3>
              <p className="font-light">Technologist</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-4">
              <img
                src={first.src}
                alt="Member Image"
                className="w-full sm:h-96 max-h-72 object-cover object-center"
              />
              <h3 className="text-2xl">Emily Johnson</h3>
              <p className="font-light">Technologist</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container flex flex-col gap-12 justify-center items-center sm:py-20 py-12 mx-auto px-4 sm:px-0">
          <h2 className="sm:text-7xl text-5xl text-teal-600 text-center font-bold">
            Why us?
          </h2>
          <img
            src={why_image.src}
            alt="River Image"
            className="h-80 object-cover w-full"
          />
          <div className="flex sm:gap-20 gap-4 flex-col sm:flex-row">
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-teal-600 text-2xl font-bold">
                Innovative Technology
              </h3>
              <p className="text-teal-600 font-light">
                TrailBlaze Inc. leverages cutting-edge technology to provide a
                user-friendly hiking app that offers detailed trail information,
                personalized recommendations, and a focus on enhancing the
                overall hiking experience for users of all skill levels. This
                innovative approach ensures that all hikers can enjoy and
                navigate the outdoors effectively and confidently.
              </p>
            </div>
            <div className="flex flex-col gap-4 text-center sm:text-left">
              <h3 className="text-teal-600 text-2xl font-bold">
                Commitment Sustainability
              </h3>
              <p className="text-teal-600 font-light">
                The company emphasizes sustainable hiking practices and
                environmental awareness, educating users on the importance of
                preserving natural ecosystems while encouraging responsible
                exploration of the great outdoors. By promoting eco-friendly
                habits, TrailBlaze Inc. aims to foster a community of hikers who
                respect nature and contribute to the preservation of the
                environment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-teal-600">
        <div className="sm:w-7/12 flex flex-col sm:gap-12 gap-4 justify-center items-center sm:py-20 py-12 mx-auto">
          <h2 className="sm:text-7xl text-3xl text-white text-center font-bold">
            Reach Out and Blaze Your Trail with Us!
          </h2>
          <button className="text-white border-2 border-white w-fit px-12 py-4">
            CONTACT US
          </button>
        </div>
      </div>
    </main>
  );
}
