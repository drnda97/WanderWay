import React from "react";
import image_1 from "@/app/assets/images/footer/1.webp";
import image_2 from "@/app/assets/images/footer/2.webp";
import image_3 from "@/app/assets/images/footer/3.webp";
import image_4 from "@/app/assets/images/footer/4.webp";

const GalleryPage = () => {
  return (
    <main className="w-full bg-gray-100">
      <div className="container mx-auto sm:py-20 py-4">
        <div className="grid grid-cols-2 sm:gap-12 gap-4">
          <div className="overflow-hidden">
            <img
              src={image_1.src}
              alt="Footer Image"
              className="w-full h-full max-h-32 sm:max-h-96 object-cover object-center hover:scale-125 transition-all cursor-pointer"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image_2.src}
              alt="Footer Image"
              className="w-full h-full max-h-32 sm:max-h-96 object-cover object-center hover:scale-125 transition-all cursor-pointer"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image_3.src}
              alt="Footer Image"
              className="w-full h-full max-h-32 sm:max-h-96 object-cover object-center hover:scale-125 transition-all cursor-pointer"
            />
          </div>
          <div className="overflow-hidden">
            <img
              src={image_4.src}
              alt="Footer Image"
              className="w-full h-full max-h-32 sm:max-h-96 object-cover object-center hover:scale-125 transition-all cursor-pointer"
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default GalleryPage;
