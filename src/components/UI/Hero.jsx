import React from 'react'
import heroImg from '../../assets/images/DevOps.png'
// import CountUp from 'react-countup/build/CountUp'
import CountUp from 'react-countup'

const Hero = () => {
  return (
    <section className='pt-0' id="about">
      <div className="container pt-14">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* =================== hero left content ================*/}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1500"
              className='text-headingColor font-[600] text-[16px]'
            >
              You are welcome
            </h5>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className='text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5'
            >I'm Kanwal Yousuf <br/> Mern 💻 & Saas <br/> Developer  🐳 </h1>

            {/* =================== hero left content ================*/}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1800"
              className='flex items-center gap-6 mt-7'
            >
              <a href="#contact"> <button className='bg-primaryColor text-white font-[500] flex items-center gap-2
              hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                <i className='ri-mail-line'></i> Hire me
              </button></a>
              <a href="#portfolio"
                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
              >
                See Port Folio
              </a>
            </div>
            <p
              data-aos="fade-left"
              data-aos-delay="1500"
              className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
            >
              <span><i class="ri-apps-2-line"></i></span>
              DevOps doesn't 'just happen' it takes conscious effort by engineering management to change the business at all levels and in all directions. DevOps is not a destination, it is a journey and you need a guide, that's me.
              Let's connect and learn from each other's experiences and knowledge.</p>
            <div className="flex items-center gap-9 mt-14">
              <span className="text-smallTextColor text-[15px] font-[600]">Follow me:</span>
              <span><a href="https://www.linkedin.com/in/kanwal-yousuf-28a5201b4/" className="text-smallTextColor text-[18px] font-[600]" ><i class="ri-linkedin-line"></i></a></span>
              <span><a href="https://github.com/Kanwal243" className="text-smallTextColor text-[18px] font-[600]" ><i class='ri-github-fill'></i></a></span>
              <span><a href="https://twitter.com/KanwalYousuf4" className="text-smallTextColor text-[18px] font-[600]" ><i class='ri-twitter-line'></i></a></span>
              <span><a href="https://www.youtube.com/channel/UCdSQ28cZ92fyFqtMEKC55tg" className="text-smallTextColor text-[18px] font-[600]" ><i class='ri-youtube-line'></i></a></span>

            </div>
          </div>
          {/* hero left end */}
          {/* =======================hero img ==========================*/}
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className='flex items-center justify-center'>
              <img src={heroImg} alt="" />
            </figure>
          </div>
          {/*========================= hero img end ======================*/}

          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={2} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]"
              >Years of Experience</h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={100} duration={2} suffix='%' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]"
              >Success Rate</h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={10} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]"
              >Happy Client</h4>
            </div>

            <div className="mb-10">
              <h2 className="text-headingColor font-[700] text-[32px]">
                <CountUp start={0} end={40} duration={2} suffix='+' />
              </h2>
              <h4 className="text-headingColor font-[600] text-[18px]"
              >Projects completed</h4>
            </div>
          </div>
        </div>
      </div>
    </section>)
}

export default Hero