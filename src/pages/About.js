import React from "react";

function About() {
  return (
    <>
      <div className="bg-secondary py-10 " id="about">
        <div className="w-11/12 mx-auto ">
          <div className="h-min-screen grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 items-center justify-items-center lg:justify-items-start  ">
            <div className="">
              <img
                src="./images/person.jpg"
                className="rounded-full lg:w-80 sm:w-36 md:w-48 w-48 object-cover object-center"
                alt="pic"
              />
            </div>
            <div className="py-10 grid ">
              <h2 className="text-white font-bold text-5xl text-center lg:text-left">
                About Us
              </h2>
              <p className="text-white mt-2 text-center lg:text-left">
                Mr. Anish Kumar Singh
              </p>
              <p className="text-white mt-10 text-sm">
                A Kumar Hydraulic Hub is a service provider that specializes in
                hydraulic systems. They offer a range of services related to
                hydraulic equipment, including repair, maintenance, and
                installation.Hydraulic systems use fluids to transmit power, and
                are commonly used in a variety of industrial applications, such
                as construction machinery, factory equipment, and transportation
                systems. These systems can be complex and require specialized
                knowledge and equipment to repair and maintain. Overall, A Kumar
                Hydraulic Hub is a reliable and trustworthy service provider for
                hydraulic systems. Whether you need repair services,
                maintenance, or installation of new equipment, their team has
                the knowledge and experience to get the job done right.
              </p>
              <div className="mt-10">
                <p className="text-white ">Contact Number </p>
                <p className="text-white ">+91 9868315533</p>
                <p className="text-white ">+91 9818605775</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
