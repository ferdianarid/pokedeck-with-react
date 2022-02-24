import React, { useState } from "react";

// import  Transition Headless UI React
import { Transition } from "@headlessui/react"

// Navbar Components
function Navbar() {
       // State isOpen
       const [isOpen, setIsOpen] = useState(false);

       return (
              <nav className="w-full fixed z-40 bg-[#171527] top-0 mx-auto">
                     <div className="h-[80px] md:h-[100px] flex items-center justify-between px-6 md:px-10">
                            <div className="flex items-center">
                                   <div className="flex-shrink-0">
                                          {/* <Image src={Logo} width="100px" height="70px" alt="brand" /> */}
                                          <h1 className="font-bold text-xl text-white">Pokedeck.</h1>
                                   </div>
                                   <div className="hidden md:block">
                                          <div className="ml-10 flex items-center space-x-4">
                                                 <a href="/">
                                                        <p className=" text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Home
                                                        </p>
                                                 </a>
                                                 <a href="/playground">
                                                        <p className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Playground
                                                        </p>
                                                 </a>
                                                 <a href="/pokemon">
                                                        <p className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Pokemon
                                                        </p>
                                                 </a>
                                                 <a href="/ranking">
                                                        <p className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               Ranking
                                                        </p>
                                                 </a>
                                                 <a href="/about">
                                                        <p className="text-white text-sm font-normal hover:text-[#24CD34] px-3 py-2 rounded-xl">
                                                               About
                                                        </p>
                                                 </a>
                                          </div>
                                   </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                   <button
                                          onClick={() => setIsOpen(!isOpen)}
                                          type="button"
                                          className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none "
                                          aria-controls="mobile-menu"
                                          aria-expanded="false"
                                   >
                                          <span className="sr-only">Open main menu</span>
                                          {!isOpen ? (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M4 6h16M4 12h16M4 18h16"
                                                        />
                                                 </svg>
                                          ) : (
                                                 <svg
                                                        className="block h-6 w-6"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        aria-hidden="true"
                                                 >
                                                        <path
                                                               strokeLinecap="round"
                                                               strokeLinejoin="round"
                                                               strokeWidth="2"
                                                               d="M6 18L18 6M6 6l12 12"
                                                        />
                                                 </svg>
                                          )}
                                   </button>
                            </div>
                     </div>

                     <Transition
                            show={isOpen}
                            enter="transition ease-out duration-100 transform"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="transition ease-in duration-75 transform"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                     >
                            {(ref: any) => (
                                   <div className="md:hidden" id="mobile-menu">
                                          <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                                 <a
                                                        href="/">
                                                        <p className="text-sm text-white hover:text-green-300 block px-3 py-2 rounded-md font-medium">
                                                               Home
                                                        </p>
                                                 </a>

                                                 <a href="/playground">
                                                        <p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Playground
                                                        </p>
                                                 </a>

                                                 <a
                                                        href="/pokemon">
                                                        <p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Pokemon
                                                        </p>
                                                 </a>

                                                 <a
                                                        href="/ranking">
                                                        <p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               Ranking
                                                        </p>
                                                 </a>
                                                 <a
                                                        href="/about">
                                                        <p className="text-white text-sm  block px-3 py-2 rounded-md font-medium">
                                                               About
                                                        </p>
                                                 </a>
                                          </div>
                                   </div>
                            )}
                     </Transition>
              </nav>
       )
}

export default Navbar;