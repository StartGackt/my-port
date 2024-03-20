import React from 'react'
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ContactForm from './Contact';
function Email() {
  return (
    <div>
      <section className='grid md:grid-cols-2 my-12 py-24 gap-24'>
      <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl lg:text-2xl uppercase">
              Contact
            </p>
            <div className="relative z-50 border-t my-12 lg:my-20 border-[#2
                5213b]">
            </div>
            <ContactForm/>
           
                <br />
            <div className="lg:w-3/4 ">
                <div className="flex flex-col gap-5 lg:gap-9">
                <p className="text-sm md:text-xl flex items-center gap-3">
                <MdAlternateEmail className="  bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
                />
                 <span className='text-[#ADB7BE]'>Email: thestackdev@gmail.com</span>
              </p>
              <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
             <span className='text-[#ADB7BE]'>Phone: 0659143679</span>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
                
              />
              <span className='text-[#ADB7BE]'>Address: Bangkok Thailand</span>
            </p>
          </div>
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />

        
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            
         
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            
            
              <FaStackOverflow
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            

              <FaFacebook
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            
                </div>

            </div>
            </div>
      </section>
      </div>
    
  )
}

export default Email
