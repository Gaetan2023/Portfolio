'use client'
import Image from "next/image";
import css from '../../public/images/css-3.svg';
import html from '../../public/images/html.svg';
import typescript from '../../public/images/typescript.svg';
import solidity from '../../public/images/Solidity-Logo.wine.svg';
import react_ from '../../public/images/react-2.svg';
import tailwin from '../../public/images/tailwind-css-2.svg';
import foundry from '../../public/images/foundry.png';
import next from '../../public/images/next-13.png';
import wagmi from '../../public/images/uS6VdwoS_400x400.jpg'
import cpp from '../../public/images/C++-Logo.wine.svg';
import node from '../../public/images/Node.js_logo.svg.png'
import { Card,CardBody } from "@nextui-org/card";
export function Tools(){
 // <div className="container z-10 mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20  bg-gray-900/50 p-3 rounded-xl">
	return (
    


    <div className="mx-auto max-w-4xl space-y-8  px-2 pt-20 lg:py-8 lg:px-8">
    <div className="lg:block">
    <div className="mx-auto max-w-4xl space-y-3  px-2 pt-20 lg:py-3 lg:px-8 bg-gray-900/20 rounded-xl ">
    <div >   
    <p className="text-base text-gray-900 dark:text-white font-bold md:text-lg">
                Skills
              </p>
            </div>
            <div className="mx-auto grid gap-10 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4">
              <div className="flex flex-col items-center">
                <Image
                  src={html}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt=""
                />
      
                <div className="flex flex-col items-center">
                  <p className="text-lg  text-gray-900 dark:text-gray-100 font-bold">HTML5</p>
                  <p className="text-sm"></p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={css}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900  dark:text-gray-100 font-bold">CSS</p>
                  <p className="text-sm text-gray-900 dark:text-white"></p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={typescript}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">TypeScript</p>
                  <p className="text-sm text-gray-900 dark:text-white">Superset JavaScript </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={solidity}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full bg-white object-cover shadow"
                  alt=""
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">Solidity</p>
                  <p className="text-sm text-gray-900 dark:text-white">
                    Smart contract <br /> language on ethereum
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={react_}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">React.js</p>
                  <p className="text-sm text-gray-900 dark:text-white">JavaScript library</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={tailwin}
                  width={100}
                  height={100}
                  className="w-50 h-50 mb-2 object-cover  shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">tailwincss</p>
                  <p className="text-sm text-gray-900 dark:text-white">CSS Framework</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={next}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100  font-bold">Next.js-13</p>
                  <p className="text-sm text-gray-900 dark:text-white">React Framework</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={foundry}
                  width={50}
                  height={50}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">Foundry-rs</p>
                  <p className="text-sm text-gray-900 dark:text-white">Solidity Framework</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <Image
                  src={wagmi}
                  width={1500}
                  className="mb-2 h-20 w-20 rounded-full object-cover shadow"
                  alt="Person"
                />
                <div className="flex flex-col items-center">
                  <p className="text-lg text-gray-900 dark:text-gray-100 font-bold">Wagmi</p>
                  <p className="text-sm text-gray-900 dark:dark:text-white">  React hooks <br />for ethereum</p>
                </div>
                
               </div>
               <div className="mb-4 flex  items-center justify-center rounded-full ">
                <Image src={cpp} width={150} height={150} alt="cpp" />
              </div>
              <div className="mb-4 flex  items-center justify-center rounded-full ">
                <Image src={node} width={150} height={150} alt="cpp" />
              </div>
            </div>
            <div></div>
            </div>
 </div>
</div>
         
       
	
	);
}
