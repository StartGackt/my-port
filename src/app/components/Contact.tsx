import React from 'react';
import { TbMailForward } from "react-icons/tb";
import { toast } from 'react-toastify';

const Contact = () => {
  return (
    <div>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">
          If you have any questions or concerns, please do not hesitate to contact me. I am open to any work opportunities that align with my skills and interests.
        </p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
  <div className="flex flex-col gap-2">
    <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
      Your Name
    </label>
    <input
      name="name"
      type="text"
      id="name"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Enter your name"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
      Your Email
    </label>
    <input
      name="email"
      type="email"
      id="email"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Enter your email"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">
      Subject
    </label>
    <input
      name="subject"
      type="text"
      id="subject"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Enter subject"
    />
  </div>
  <div className="flex flex-col gap-2">
    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">
      Message
    </label>
    <textarea
      name="message"
      id="message"
      required
      className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
      placeholder="Enter your message"
    ></textarea>
  </div>
  <button
  className="flex items-center justify-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
  role="button"
>
  <span className="hidden md:inline">Send Message</span> {/* Hide the text on small screens */}
  <span className="md:hidden">Send</span> {/* Display shorter text on small screens */}
  <TbMailForward className="mt-1" size={18}  />
</button>

</div>

    </div>
    </div>
  );
};

export default Contact;
