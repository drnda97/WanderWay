import React from "react";
import first from "@/app/assets/images/about/1.webp";
import second from "@/app/assets/images/about/2.webp";
import third from "@/app/assets/images/about/3.webp";

const Page = () => {
  return (
    <main className="w-full">
      <div className="bg-gray-100 sm:py-20 py-12 px-4">
        <div className="container mx-auto flex flex-col sm:gap-40 gap-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-40 gap-6">
            <img
              src={first.src}
              alt="Sport Image"
              className="w-fit object-cover"
            />
            <div className="flex flex-col gap-4 sm:gap-y-12 gap-y-4 sm:w-4/6 text-center sm:text-left">
              <h1 className="text-teal-600 sm:text-7xl text-4xl font-bold">
                About us
              </h1>
              <p className="text-teal-600 font-light">
                At TrailBlaze Inc., we are a pioneering outdoor technology
                company founded in 2023, dedicated to enhancing the hiking
                experience for enthusiasts worldwide. Our mission is to connect
                people with nature through innovative technology, promoting
                exploration, adventure, and environmental awareness. Our diverse
                team comprises outdoor enthusiasts, technology experts, and
                environmental advocates who share a passion for the great
                outdoors. With a focus on sustainable practices, we strive to
                empower users to explore responsibly while enjoying nature s
                beauty. Together, we are committed to seamlessly integrating
                technology with outdoor exploration, paving the way for a new
                era of adventure for hikers of all levels.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 content-between sm:grid-cols-2 gap-4 relative">
            <img
              src={second.src}
              alt="Sport Image"
              className="h-auto object-cover object-center sm:absolute right-0 top-0 flex sm:hidden"
            />
            <div className="flex flex-col gap-4 sm:gap-y-12 sm:w-4/6 text-center sm:text-left">
              <p className="text-teal-600 font-light sm:text-left text-center">
                At TrailBlaze Inc., we are a passionate collective of outdoor
                enthusiasts, technology innovators, and environmental advocates
                committed to enhancing the hiking experience for adventurers
                around the globe. Founded in 2023, our mission is to bridge the
                gap between technology and nature, fostering a deeper connection
                for those who seek exploration and adventure in the great
                outdoors.
              </p>
              <p className="text-teal-600 font-light sm:text-left text-center">
                Our team comprises individuals with diverse backgrounds in app
                development, environmental science, and outdoor recreation. This
                unique blend of expertise drives our commitment to creating
                tools that empower hikers to explore responsibly and safely. We
                understand the joys and challenges that come with outdoor
                pursuits, and we strive to provide solutions that elevate every
                hiking journey.
              </p>
              <p className="text-teal-600 font-light sm:text-left text-center">
                At the heart of our company is a cutting-edge hiking app
                designed to cater to both casual trekkers and seasoned
                adventurers. Our app offers detailed trail information,
                personalized recommendations, and educational resources on
                sustainable hiking practices, ensuring that users have the
                knowledge and tools to navigate the trails with confidence and
                respect for nature.
              </p>
              <p className="text-teal-600 font-light sm:text-left text-center">
                We believe in the importance of preserving natural ecosystems
                for future generations, and our app reflects this ethos by
                encouraging users to engage with the environment mindfully. As
                we continue to grow and evolve, we remain dedicated to our core
                values of exploration, adventure, and environmental awareness.
              </p>
              <p className="text-teal-600 font-light sm:text-left text-center">
                Join us at TrailBlaze Inc. as we pave the way for a new era of
                outdoor exploration, inviting you to discover the beauty of
                nature and embark on unforgettable hiking journeys.
              </p>
            </div>
            <img
              src={second.src}
              alt="Sport Image"
              className="h-auto object-cover object-center sm:absolute right-0 top-0 hidden sm:flex"
            />
            <img
              src={third.src}
              alt="Sport Image"
              className="h-auto object-cover object-center sm:absolute right-96 top-52"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Page;
