import React from "react";

function Testomonial() {
  return (
    <>
      <div className="py-10 h-min-screen ">
        <p className="text-center text-3xl font-bold underline underline-offset-8 decoration-4 text-gray-600 ">
          Testimonial
        </p>
        <div className="grid mt-20 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-4/5 mx-auto ">
          <div className="rounded-md card bg-gray-300 flex-col justify-center items-center py-10 px-5">
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                alt=""
                className="rounded-full w-24 h-24 object-cover "
              />
            </div>
            <p className="mt-5 text-sm text-center ">Vishal Kumar</p>
            <p className="text-center text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              officiis sunt amet ea eveniet laboriosam incidunt nihil veniam
              neque doloremque!
            </p>
          </div>
          <div className="rounded-md card bg-gray-300 flex-col justify-center items-center py-10 px-5 ">
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                alt=""
                className="rounded-full w-24 h-24 object-cover "
              />
            </div>
            <p className="mt-5 text-sm text-center ">Vishal Kumar</p>
            <p className="text-center text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              officiis sunt amet ea eveniet laboriosam incidunt nihil veniam
              neque doloremque!
            </p>
          </div>
          <div className="rounded-md card bg-gray-300 flex-col justify-center items-center py-10 px-5">
            <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO2vBQ1vOla9pPM6M0ZsYZb7OckCS21cgN_Q&usqp=CAU"
                alt=""
                className="rounded-full w-24 h-24 object-cover "
              />
            </div>
            <p className="mt-5 text-sm text-center ">Vishal Kumar</p>
            <p className="text-center text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
              officiis sunt amet ea eveniet laboriosam incidunt nihil veniam
              neque doloremque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Testomonial;
