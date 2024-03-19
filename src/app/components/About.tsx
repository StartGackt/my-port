import React from 'react'

const About = () => {
  return (
    <section className='text-white'>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
          <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
            ABOUT ME
          </span>
          <span className="h-36 w-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="order-2 lg:order-1">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl lg:text-2xl uppercase">
              Who I am?
            </p>
            <div className="text-gray-200 lg:text-lg">
  <p className="mb-2">My name is oat srichainiwas. I am a professional and enthusiastic programmer in my daily life.</p>
  <p className="mb-2">I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and am passionate about problem-solving.</p>
  <p className="mb-2">I am available for any kind of job opportunity that suits my skills and interests.</p>
</div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default About
