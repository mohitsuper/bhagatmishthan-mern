import { useEffect, useState } from "react";
import axios from "axios";

export default function GetIpAddress() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const res = await axios.get("https://api.ipify.org?format=json");
        setIp(res.data.ip);
      } catch (err) {
        console.error("Error fetching IP:", err);
      }
    };
    fetchIP();
  }, []);

  return ip;
}
