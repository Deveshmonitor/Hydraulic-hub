import React from "react";
import data from "./Data";

function Services() {
  return (
    <>
      <div className="py-10" id="services">
        <p className="text-center text-3xl font-bold underline underline-offset-8 decoration-4 text-gray-600">
          Services
        </p>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((item, index) => {
                return (
                  <div className="lg:w-1/4 md:w-1/2 p-4 w-full " key={index}>
                    <div className="block relative h-48 rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="object-cover object-center w-full h-full block"
                        src={item.image}
                      />
                    </div>
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium text-center">
                        {item.name}
                      </h2>
                      <p className="text-center mt-2 bg-secondary text-white py-1 ">
                        Build on Order
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Services;
