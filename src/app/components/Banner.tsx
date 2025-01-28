import React from "react";
import Image from "next/image";
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import flag from "../../../public/asset/flag.png";
import logo from "../../../public/asset/logo.png";
import irsLogo from "../../../public/asset/image.png";

const Banner = () => {
  return (
    <>
      <div className="w-full bg-[#00173c] flex items-center text-white justify-around h-[80px]">
        <div className="flex">
          <div>
            <p className="flex items-center ">
              <CiMail color="yellow" /> hello@cleartaxfiler.com
            </p>
            <div className="flex gap-10 ">
              <p className="flex items-center ">
                <CiMail color="yellow" />
                info@cleartaxfiler.com
              </p>
              <p className="flex items-center">
                <Image src={flag} alt="american flag" width={30} height={30} />
                +1 626-382-3299
              </p>
            </div>
          </div>

          <button className="p-5 bg-yellow-500 animate-blink rounded-md ml-16">
            LOGIN/REGISTER
          </button>
        </div>

        <div className="flex gap-5">
          <span>
            <FaFacebookF />
          </span>
          <span>
            <FaInstagram />
          </span>
          <span>
            <FaTwitter />
          </span>
          <span>
            <FaYoutube />
          </span>
        </div>
      </div>

      <div className="w-full bg-white flex items-center justify-between h-[100px] px-10 shadow-lg">
        <div className="flex items-center">
          <Image src={logo} alt="Clear Tax Logo" width={160} height={160} />{" "}
        </div>

        <div className="flex items-center gap-10">
          <a href="#" className="text-blue-950 font-bold">
            HOME
          </a>
          <a href="#" className="text-blue-950 font-bold">
            ABOUT US
          </a>
          <a href="#" className="text-blue-950 font-bold">
            SERVICES
          </a>
          <a href="#" className="text-blue-950 font-bold">
            PRICING
          </a>
          <a href="#" className="text-blue-950 font-bold">
            REFUND STATUS
          </a>
          <a href="#" className="text-blue-950 font-bold">
            CONTACT US
          </a>
        </div>

        <div className="flex items-center gap-5">
          <Image src={irsLogo} alt="IRS Logo" width={30} height={30} />

          <div className="relative flex items-center justify-center w-[60px] h-[60px] bg-white rounded-full shadow-lg">
            <div className="flex items-center justify-center w-[50px] h-[50px] bg-yellow-400 rounded-full">
              <FiPhoneCall className="text-white text-2xl" />
            </div>
          </div>

          <div className="flex flex-col text-blue-900 font-medium text-left">
            <span className="font-light">Call Me!</span>
            <span className="text-xl font-bold text-blue-950">
              +1 626-382-3299
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
