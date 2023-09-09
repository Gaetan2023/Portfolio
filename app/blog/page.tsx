'use client'
import React from 'react'


import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import {Tabs, Tab} from "@nextui-org/tabs";


export default function BlogPage ()  {
  return (
    <div className='container flex justify-center'>
    <div>
   <Tabs aria-label="Options">
        <Tab key="a" title="Frontend">
        <Card  className="max-w-[400px]">
      <CardHeader className="flex gap-3">
       
        <div className="flex flex-col">
          <p className="text-md">Next.js</p>
         
        </div>
      </CardHeader>
     
      <CardBody>
        <p>Having converted to programming web3, I use nextjs 
          for the frontend part including all technologies such as
          html, css, typescript under React.js library</p>
      </CardBody>
     
      <CardFooter>
        <a
            
          href="https://github.com/Gaetan2023/uhuru"
          target='blanck'
        >
          Visit source code on GitHub.
        </a>
      </CardFooter>
    </Card>  
        </Tab>
        <Tab key="ether" title="Ethereum">
        <Card  className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
          <p className="text-md">Solidity</p>
          <p className="text-small text-default-500"><a href="https://soliditylang.org/"  target='blanck'>soliditylang</a></p>
        </div>
      </CardHeader>
     
      <CardBody>
        <p>langage allow  to write smart contract on blockchain.</p>
      </CardBody>
     
      <CardFooter>
        <a
           
          href="https://github.com/Gaetan2023"  target='blanck'
        >
          Visit source code on GitHub.
        </a>
      </CardFooter>
    </Card>
        </Tab>
       
        <Tab key="swarm" title="Link">
        <Card  className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        
        <div className="flex flex-col">
          <p className="text-md">Wagmi</p>
          <p className="text-small text-default-500"></p>
        </div>
      </CardHeader>
      
      <CardBody>
        <p>Using wagmi thas is react hooks allowing to link smart contract(backend) to it website frontend</p>
      </CardBody>
    
      <CardFooter>
        <a
      
          href="https://wagmi.sh/"  target='blanck'
        >
          Visit wagmi website.
        </a>
      </CardFooter>
    </Card> 
        </Tab>
        
      </Tabs>
</div>
</div>

    
    );
  }

 
