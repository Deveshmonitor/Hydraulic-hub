import React, { useState } from "react";

function Contact() {
  const [Data, setData] = useState({});

  const handleChange = (e) => {
    setData({ ...Data, [e.target.name]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    console.log(Data);
  };
  return (
    <div className="bg-secondary" id="contact">
      <div className="w-11/12 mx-auto py-10">
        <div className=" bg-secondary h-min-screen grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  items-center justify-items-center  ">
          <div className="w-4/5">
            <h2 className="text-white font-bold text-5xl">Contact Us</h2>
            <p className="text-white mt-2 ">Mr. Anish Kumar Singh</p>
            <p className="text-white  mt-10">
              Akumar Hydraulic Hub which is offering multiple services at one
              place in affordable price and best Quality. We provide service
              Across India.
            </p>
            <p className="text-white mt-5">
              Kh. No.628, near shiv mandir, Sultanpur Majra Village, Delhi,
              110041
            </p>
            <div className="mt-10">
              <p className="text-white ">Contact Number </p>
              <p className="text-white ">+91 9868315533</p>
              <p className="text-white ">+91 9818605775</p>
            </div>
          </div>
          <div className="w-4/5  mx-auto mt-10 ">
            <h2 className="text-white text-3xl mb-5">Message Us</h2>
            <form action="" className="flex flex-col space-y-4">
              <div>
                <input
                  name="name"
                  onChange={handleChange}
                  value={Data.name}
                  type="text"
                  placeholder="Your Good Name"
                  className="ring-1 text-black ring-white w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
              <div>
                <input
                  name="email"
                  onChange={handleChange}
                  value={Data.email}
                  type="email"
                  placeholder="Your Contact Email"
                  className="ring-1 text-black ring-white w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
              <div>
                <input
                  name="demo"
                  onChange={handleChange}
                  value={Data.demo}
                  type="text"
                  placeholder="Demo For Product"
                  className="ring-1 text-black ring-white w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>

              <div>
                <textarea
                  name="comment"
                  onChange={handleChange}
                  value={Data.comment}
                  type="text"
                  rows={4}
                  placeholder="Leave Your Comment Here!"
                  className="ring-1 text-black ring-white  w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-600 text-sm"
                />
              </div>
              <button
                className="inline-block self-end bg-white font-bold rounded-lg px-6 py-2 uppercase text-sm text-amber-500"
                onClick={HandleSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
