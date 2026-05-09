import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import axios from "axios";
import { GetTopbarData } from "../../Api/Api";
export default function TopBar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getTopbarApi = async()=>{
      const responce = await GetTopbarData()
      setData(responce || []);
    }
    getTopbarApi()
  }, []);
  // useEffect(()=>{
  //   const fetchData = async () => {
  //     const response = await axios.get(`${import.meta.env.VITE_BASEURL}/home/topbar`);
  //     setData(response.data.data);
  //   }
  //   fetchData();x
  // },[])
  return (
    <div className="bg-indigo-600 py-2 text-white ">
      <Marquee speed={50} gradient={false}>
        {data?.length >0 &&
          data.map((item, index) => {
            return (
              <div className="flex gap-3" key={index}>
                <p  className="mx-5">
                  {item?.title}
                </p>
                <p  className="mx-5">
                  {item?.title}
                </p>
              </div>
            );
          })}
      </Marquee>
    </div>
  );
}
