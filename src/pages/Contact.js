import React from 'react'

function Contact() {
  return (
    <>
 

<body className="w-full">
                <div className="flex w-full min-h-screen justify-center items-center">

                    <div className="flex flex-col w-full md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-gradient-to-r from-yellow-400 to-orange-500  max-w-4xl p-8 rounded-xl shadow-lg text-white">
                        

                        <div className="w-full">
                            <div className="  wrounded-xl  p-8">
                                
                                <img src="./images/Person.png" alt="" />

                            </div>
                        </div>


                        <div className="flex flex-col space-y-8 justify-between">
                            <div><h1 className="font-bold text-6xl tracking-wide">About-Us</h1>
                                <p className="pt-2 text-white text-2xl font-bold">Mr. Anish Kumar Shing</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat non,
                                    quod veniam error aspernatur inventore quae quas iste quasi.</p>
                            </div>
                            <div>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat non,
                                    quod veniam error aspernatur inventore quae quas iste quasi.</p>
                            </div>
                            <div>
                              <span>Contact Number</span> <br />
                               <span>+1954546543245</span>
                            </div>
                        </div>

                    </div>

                </div>
            </body>
    </>
  )
}

export default Contact