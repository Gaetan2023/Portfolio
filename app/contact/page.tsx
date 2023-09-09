'use client'
import React from 'react';
import Image from 'next/image';
import visage from '../../public/images/visage.jpg';
import { Card,CardBody } from '@nextui-org/card';
export default function ContactPage ()  {
    
  return ( 
       
     
    <div className="lg:block">
    <div className="mx-auto max-w-4xl space-y-8  px-2 pt-20 lg:py-8 lg:px-8">
    <Card  isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 "
      shadow="sm"><CardBody>
       <div className="  z-0 mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
        
        <div className="row-gap-8 grid gap-12 lg:grid-cols-2 z-10 dark:bg-black/10 p-3 rounded-xl">
        <div className="flex flex-col justify-center rounded-2xl">
          <div className="mb-6 max-w-xl text-gray-900 dark:text-white">
            <h2 className="mb-6 max-w-lg font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none">
              Gaetan musinde
              <br className="hidden md:block" />
              Blockchain{' '}
              <span className="text-blue-900 inline-block">
              fullstack developer 
              </span>
            </h2>
            <p className="text-base md:text-lg  text-black dark:text-white">
              Electromechanical engineer by training, I became a blockchain programmer
              following the advent of distributed ledger technology. 
              
            </p>
          </div>
         
          <div className="space-y-2 text-sm">
           <p className="text-base font-bold tracking-wide text-black dark:text-white">
             Contacts
           </p>
           <div className="flex">
           <p className="mr-1  text-black dark:text-white">Phone:</p>
             <a
               href="tel:+243-974-687-721"
               aria-label="Our phone"
               title="Our phone"
               className=" text-black dark:text-white hover:text-blue-800 transition-colors duration-300"
             >+243-974-687-721
             </a>
           </div>
           <div className="flex">
             <p className="mr-1  text-black dark:text-white">Email:</p>
             <a
               href="mailto:gmusinde25@gmail.com"
               aria-label="Our email"
               title="Our email"
               className=" text-black dark:text-white hover:text-blue-800 transition-colors duration-300"
             >
               gmusinde25@gmail.com
             </a>
           </div>
           <div className="flex">
             <p className="mr-1   text-black dark:text-white">Address:</p>
             <a
               href="https://www.google.com/maps"
               target="_blank"
               rel="noopener noreferrer"
               aria-label="Our address"
               title="Our address"
               className=" text-gray-100 dark:text-white hover:text-blue-800 transition-colors duration-300"
             >
               Lubumbashi town, DRC
             </a>
           </div>
         </div>
          
        </div>
        <div>
          <Image
            src={visage}
            className="h-56 w-full rounded-xl object-cover shadow-lg sm:h-96"
            alt=""
          />
        </div>
         </div>
        
     </div>
     </CardBody></Card>
       </div></div> 
   
  )
}





 

 

