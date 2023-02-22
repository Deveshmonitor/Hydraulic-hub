import React from "react";

function Front() {
  return (
    <>
      <div className="front lg:h-screen h-[70vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center md:w-[80%]  w-[90%]">
          <p className="text-5xl font-bold text-white md:text-7xl text-center">
            A Kumar Hydraulic Hub
          </p>
          <p className=" text-white text-center mt-4">
            Our Hub is Akumar Hydraulic Hub is known because our services are
            like bread and butter to our clients, Whatever you want like
            hydraulic pump, vene pump and more
          </p>
          <div className=" flex justify-center mt-5">
            <button className="text-white  rounded-full border-white border px-4 py-2">
              Contact Us
            </button>
            <ion-icon name="menu-outline"></ion-icon>
          </div>
        </div>
      </div>
    </>
  );
}

export default Front;
