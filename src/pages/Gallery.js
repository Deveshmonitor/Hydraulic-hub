import React from "react";

function Gallery() {
  return (
    <>
      <div className=" py-10 min-h-screen " id="gallery">
        <p className="text-center text-3xl font-bold underline underline-offset-8 decoration-4 text-gray-600 ">
          Gallery
        </p>
        <div className="grid mt-10  grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 w-10/12 mx-auto  ">
          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img src="./images/2.jpg" alt="" className="rounded-md " />
            </div>
          </div>

          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/p/AF1QipNAH9NWTkqlSmgKwoLlUIawnI_CgQogPsL31kPp=s680-w680-h510"
                alt=""
                className="rounded-md object-cover"
              />
            </div>
          </div>

          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img src="./images/5.jpg" alt="" className="rounded-md " />
            </div>
          </div>

          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img src="./images/6.jpg" alt="" className="rounded-md " />
            </div>
          </div>

          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img src="./images/7.jpg" alt="" className="rounded-md " />
            </div>
          </div>

          <div className="rounded-md  card bg-gray-300 flex-col justify-center items-center">
            <div className="flex justify-center">
              <img src="./images/3.jpg" alt="" className="rounded-md " />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
