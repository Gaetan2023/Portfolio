'use client'
import React from 'react'
import { FaGithub , FaTwitter, FaLinkedin, FaTelegram,FaWhatsapp,FaDiscord } from 'react-icons/fa6';


export  function Foot () {
  return (
    
          <div className="mx-auto pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-0  bg-gray-900/50 p-5 rounded-xl">
            <div className="row-gap-6 mb-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <a
                  href="/"
                  aria-label="Go home"
                  title="Company"
                  className="inline-flex items-center"
                >
                  <svg
                    className="text-white w-8"
                    viewBox="0 0 24 24"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    stroke="currentColor"
                    fill="none"
                  >
                    <rect x="3" y="1" width="7" height="12" />
                    <rect x="3" y="17" width="7" height="6" />
                    <rect x="14" y="1" width="7" height="6" />
                    <rect x="14" y="11" width="7" height="12" />
                  </svg>
                  <span className="ml-2 text-xl font-bold uppercase tracking-wide text-white">
                    Uhuru
                  </span>
                </a>
                <div className="mt-6 lg:max-w-sm">
                  <p className="text-sm text-white">
                    Uhuru is a Dapp thas is allow you to use ipfs system thas is for
                    us the future of web
                  </p>
                  <p className="text-gray-100 mt-4 text-sm">
                    we beleive thas with your contribution together we can help people
                    to live in global freedom
                  </p>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-base font-bold tracking-wide text-white">
                  Contacts
                </p>
                <div className="flex">
                <p className="mr-1 text-white">Phone:</p>
                  <a
                    href="tel:+243-974-687-721"
                    aria-label="Our phone"
                    title="Our phone"
                    className="text-white hover:text-blue-800 transition-colors duration-300"
                  >+243-974-687-721
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1 text-white">Email:</p>
                  <a
                    href="mailto:gmusinde25@gmail.com"
                    aria-label="Our email"
                    title="Our email"
                    className="text-white hover:text-blue-800 transition-colors duration-300"
                  >
                    gmusinde25@gmail.com
                  </a>
                </div>
                <div className="flex">
                  <p className="mr-1  text-white">Address:</p>
                  <a
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Our address"
                    title="Our address"
                    className="text-white hover:text-blue-800 transition-colors duration-300"
                  >
                    Lubumbashi town, DRC
                  </a>
                </div>
              </div>
              <div>
                <span className="text-base font-bold tracking-wide text-white">
                  Social
                </span>
                <div className="mt-1 flex items-center space-x-3">
                  <a
                    href="https://github.com/Gaetan2023"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 text-white transition-colors duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gaetan-musinde-99b59b272/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-white transition-colors duration-300"
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a
                    href="https://twitter.com/gaetan199025"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 text-white transition-colors duration-300"
                  >
                    <FaTwitter size={20}/>
                  </a>
                  <a
                    href="https://t.me/Gaetan_musinde"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-400 text-white transition-colors duration-300"
                  >
                    <FaTelegram size={20} />
                  </a>
                   <a
                    href=" https://wa.me/243974687721"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 text-white transition-colors duration-300"
                  >
                    <FaWhatsapp size={20} />
                  </a>
                  <a
                    href="https://discord.com/channels/@gaetan8290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600  text-white transition-colors duration-300"
                  >
                    <FaDiscord size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col-reverse justify-between border-t pb-10 pt-5 lg:flex-row">
              <p className="text-sm  text-white">
                © Copyright 2023 Uhuru. All rights reserved.
              </p>
              <ul className="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-x-5 sm:space-y-0 lg:mb-0">
                <li>
                  <a
                    href="/documentation"
                    className="hover:text-purple-400 text-sm text-gray-400 transition-colors duration-300"
                  >
                    F.A.Q
                  </a>
                </li>
              </ul>
            </div>
          </div>

      
  )
}


