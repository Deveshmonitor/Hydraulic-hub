import React from 'react'

function About() {
    return (
        <> <body className="w-full">
        <div className="flex w-full min-h-screen justify-center items-center">

            <div className="flex flex-col w-full md:flex-row md:space-x-6  space-y-6 md:space-y-0 bg-gradient-to-r from-yellow-400 to-orange-500  max-w-4xl p-8 rounded-xl shadow-lg text-white">
                <div className="flex flex-col space-y-8 justify-between">
                    <div><h1 className="font-bold text-6xl tracking-wide">Contact-Us</h1>
                        <p className="pt-2 text-white text-2xl font-bold">Mr. Anish Kumar Shing</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat non,
                            quod veniam error aspernatur inventore quae quas iste quasi.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident placeat non,
                            quod veniam error aspernatur inventore quae quas iste quasi.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="inline-flex space-x-2 items-center">
                        <span>+(213) 4567 6589</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                        <span>+(213) 4567 6589</span>
                        </div>
                        <div className="inline-flex space-x-2 items-center">
                        <span>+(213) 4567 6589</span>
                        </div>
                        
                    </div>
                </div>

                <div className="w-full">
                    <div className=" wrounded-xl  p-8">
                        <form action="" className="flex flex-col space-y-4">
                            <div>
                                <input type="text" placeholder="Your Good Name" className="ring-1 text-black ring-yellow-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-stone-900" />
                            </div>
                            <div>
                                <input type="email" placeholder="Your Contact Email" className="ring-1 text-black ring-yellow-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-stone-900" />
                            </div>
                            <div>
                                <input type="text" placeholder="Demo For Product" className="ring-1 text-black ring-yellow-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-stone-900" />
                            </div>

                            <div>
                                <textarea type="text" rows={4} placeholder="Leave Your Comment Here!" className="ring-1 text-black ring-yellow-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-stone-900" />
                            </div>
                            <button className="inline-block self-end bg-white font-bold rounded-lg px-6 py-2 uppercase text-sm text-amber-500">Send Message</button>

                        </form>

                    </div>
                </div>

            </div>

        </div>
    </body>
        </>
    )
}

export default About