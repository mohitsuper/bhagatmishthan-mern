import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";


import { GetTopbarData } from "../../Api/Api";

export default function TopBar() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getTopbarApi = async () => {
      const response = await GetTopbarData();
      setData(response || []);
    };

    getTopbarApi();
  }, []);

  return (
    <div className="bg-black text-white border-b border-zinc-800">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* LEFT SIDE - MARQUEE */}
          <div className="md:w-[50%] overflow-hidden">
            <Marquee speed={40} gradient={false}>
              <div className="flex items-center">
                {data?.length > 0 &&
                  data.map((item, index) => {
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center"
                      >
                        <span className="w-2 h-2 bg-purple-500 rounded-full mx-4"></span>

                        <p className="text-sm font-medium text-zinc-100 whitespace-nowrap">
                          {item?.title}
                        </p>

                        <span className="mx-5 text-zinc-600">|</span>
                      </motion.div>
                    );
                  })}
              </div>
            </Marquee>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-[50%] flex items-center gap-5 text-sm flex-row justify-end my-2 md:py-0 ">
            
            {/* EMAIL */}
            <div className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 duration-300 cursor-pointer">
              <i className="fa-solid fa-envelope cursor-pointer hover:text-purple-400 duration-300"></i>

              <span>support@shopper.com</span>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-2 text-zinc-300 hover:text-purple-400 duration-300 cursor-pointer">
<i className="fa-solid fa-phone cursor-pointer hover:text-purple-400 duration-300"></i>              <span>+91 9876543210</span>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 ml-2">
              <i className="fa-brands fa-instagram cursor-pointer hover:text-purple-400 duration-300"></i>

<i className="fa-brands fa-x-twitter cursor-pointer hover:text-purple-400 duration-300"></i>

<i className="fa-brands fa-youtube cursor-pointer hover:text-purple-400 duration-300"></i>

<i className="fa-brands fa-facebook cursor-pointer hover:text-purple-400 duration-300"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}