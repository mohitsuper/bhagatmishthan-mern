import React from 'react'
import HomeHeading from '../../Commen-components/Heading/HomeHeading'

export default function VideoSection() {

  const videoUrl = [
    "https://www.youtube.com/embed/PwzmpY8cdn0",
    "https://www.youtube.com/embed/wz_D2Pwrhxk",
    "https://www.youtube.com/embed/3gmgHSRC6fQ",
    "https://www.youtube.com/embed/SyPaW4dD7AQ",
  ]

  return (
    <section className='py-20 md:px-20 px-5'>

      {/* Heading */}
      <div className='mb-14 text-center'>
        <HomeHeading title={"Video Gallery"} subtitle={"Discover our featured video collection with premium visuals and engaging moments."} />
      </div>

      {/* Video Grid */}
      <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8'>

        {
          videoUrl.map((v, i) => {
            return (

              <div
                key={i}
                className='group relative overflow-hidden rounded-3xl bg-[#111111] border border-[#851AD6]/20 shadow-lg hover:shadow-[#851AD6]/30 hover:-translate-y-2 transition-all duration-500'
              >

                {/* Glow Effect */}
                <div className='absolute inset-0 bg-gradient-to-t from-[#851AD6]/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 z-10'></div>

                {/* Video */}
                <iframe
                  className='w-full h-[420px] rounded-3xl'
                  src={v}
                  title={`video-${i}`}
                  allowFullScreen
                ></iframe>

                {/* Bottom Overlay */}
                <div className='absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent z-20'>

                  <div className='flex items-center justify-between'>

                    <div>
                      <h3 className='text-white font-semibold text-sm md:text-base'>
                        Featured Video
                      </h3>

                      <p className='text-gray-300 text-xs mt-1'>
                        Premium Collection
                      </p>
                    </div>

                    {/* Play Button */}
                    <div className='w-11 h-11 rounded-full bg-[#851AD6] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition duration-300'>
                      <i className="fa-solid fa-play text-sm"></i>
                    </div>

                  </div>
                </div>

              </div>
            )
          })
        }

      </div>
    </section>
  )
}