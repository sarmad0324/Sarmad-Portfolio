import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="px-6 py-16 bg-[#F8FAFC] dark:bg-[#000000] text-[#2E2E2E] dark:text-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <h2 className="text-3xl font-bold uppercase mb-12 text-center">
          Services
        </h2>

        {/* Services list */}
        <div className="space-y-16">
          {/* 1. Custom Web Development */}
          <div className="md:flex md:items-center">
            {/* Text Column */}
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-xl font-bold uppercase mb-4">
                Custom Web Development
              </h3>
              <p className="leading-relaxed">
                Building <b>custom web applications</b> using modern frameworks like 
                React, Next.js, Node.js, and Angular (and even WordPress for CMS needs). 
                We tailor each project to client requirements, delivering fast, responsive, 
                and scalable web solutions.
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-6 px-6 py-3 border-2 border-[#9AA6B2] text-[#9AA6B2] 
                           font-semibold uppercase rounded hover:bg-[#9AA6B2] hover:text-[#F8FAFC] 
                           dark:border-[#7D7D7D] dark:text-[#7D7D7D] dark:hover:bg-[#7D7D7D] dark:hover:text-[#000000] 
                           transition-colors"
              >
                Let’s Talk
              </a>
            </div>
            {/* Image/Graphic Column (optional) */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              {/* You can insert an illustrative image or icon here for visual impact */}
            </div>
          </div>

          {/* Separator line */}
          <div className="h-px bg-[#BCCCDC] dark:bg-[#4B4B4B]"></div>

          {/* 2. Mobile App Development */}
          <div className="md:flex md:items-center md:flex-row-reverse">
            {/* Text Column */}
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-xl font-bold uppercase mb-4 md:text-right">
                Mobile App Development
              </h3>
              <p className="leading-relaxed md:text-right">
                Developing <b>mobile applications</b> for both Android and iOS using React Native as well 
                as native tools (Android Studio, Xcode). We create smooth, high-performance mobile apps 
                that offer a seamless user experience across devices.
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-6 px-6 py-3 border-2 border-[#9AA6B2] text-[#9AA6B2] 
                           font-semibold uppercase rounded hover:bg-[#9AA6B2] hover:text-[#F8FAFC] 
                           dark:border-[#7D7D7D] dark:text-[#7D7D7D] dark:hover:bg-[#7D7D7D] dark:hover:text-[#000000] 
                           transition-colors"
              >
                Let’s Talk
              </a>
            </div>
            {/* Image/Graphic Column */}
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              {/* Optional image or mockup for Mobile App Development */}
            </div>
          </div>

          <div className="h-px bg-[#BCCCDC] dark:bg-[#4B4B4B]"></div>

          {/* 3. AI Integration & Automation */}
          <div className="md:flex md:items-center">
            {/* Text Column */}
            <div className="md:w-1/2 md:pr-8">
              <h3 className="text-xl font-bold uppercase mb-4">
                AI Integration &amp; Automation
              </h3>
              <p className="leading-relaxed">
                Implementing <b>AI solutions and workflow automation</b> using Python and machine learning. 
                We integrate intelligent automation into products and business processes – from predictive 
                analytics to process optimization – to enhance efficiency and innovation.
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-6 px-6 py-3 border-2 border-[#9AA6B2] text-[#9AA6B2] 
                           font-semibold uppercase rounded hover:bg-[#9AA6B2] hover:text-[#F8FAFC] 
                           dark:border-[#7D7D7D] dark:text-[#7D7D7D] dark:hover:bg-[#7D7D7D] dark:hover:text-[#000000] 
                           transition-colors"
              >
                Let’s Talk
              </a>
            </div>
            {/* Image/Graphic Column */}
            <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
              {/* Optional image or illustration for AI Integration */}
            </div>
          </div>

          <div className="h-px bg-[#BCCCDC] dark:bg-[#4B4B4B]"></div>

          {/* 4. Remote Development */}
          <div className="md:flex md:items-center md:flex-row-reverse">
            {/* Text Column */}
            <div className="md:w-1/2 md:pl-8">
              <h3 className="text-xl font-bold uppercase mb-4 md:text-right">
                Remote Development
              </h3>
              <p className="leading-relaxed md:text-right">
              As a remote developer, I deliver dedicated development expertise—
      working seamlessly with your team to build, iterate, and scale your product
      with flexibility and full commitment.
              </p>
              <a 
                href="#contact" 
                className="inline-block mt-6 px-6 py-3 border-2 border-[#9AA6B2] text-[#9AA6B2] 
                           font-semibold uppercase rounded hover:bg-[#9AA6B2] hover:text-[#F8FAFC] 
                           dark:border-[#7D7D7D] dark:text-[#7D7D7D] dark:hover:bg-[#7D7D7D] dark:hover:text-[#000000] 
                           transition-colors"
              >
                Let’s Talk
              </a>
            </div>
            {/* Image/Graphic Column */}
            <div className="md:w-1/2 md:pr-8 mt-8 md:mt-0">
              {/* Optional image or graphic for Remote Development */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;