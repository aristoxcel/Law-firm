

import banner from "../../../public/assets/images/banner.jpg";
import pic from "../../../public/assets/images/pic.png";

import Link from "next/link";
import Image from "next/image";

export default function Banner() {

  const titles = ["Civil", "Criminal", "Income Tax"];

  return (
    <div className="w-full bg-center bg-cover min-h-[calc(100vh-1px)]">
      <Image
        src={banner}
        alt="Banner Image"
        layout="fill" // Makes it cover the container
        objectFit="cover"
        objectPosition="center"
      />
      <div className="absolute inset-0 bg-gray-900/50 flex justify-center items-center">
        <div className="text-center p-6">
          <h3 className="text-2xl text-gray-200/70  font-roboto  lg:text-4xl">
            Professional Lawyers
          </h3>
          <h1 className="text-3xl font-bold font-playFair  text-white lg:text-7xl">
            We Will Fight
          </h1>
          <h1 className="text-3xl font-bold font-playFair text-white lg:text-7xl">
            For You Like A Friend
          </h1>
          <br />

          <div className="mt-4 flex justify-center">
            {" "}
            <Link href={"/"}>
              <button className="group  font-bold relative flex w-48 items-center rounded-lg border-2 border-primary p-4 text-secondary">
                <span>Free Consultation</span>
                <span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-primary duration-300 group-hover:w-[87%]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g strokeWidth="0"></g>
                    <g strokeLinecap="round" strokeLinejoin="round"></g>
                    <g>
                      <path
                        d="M4 12H20M20 12L14 6M20 12L14 18"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </g>
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>

        {/* Red Box */}
        <div className="absolute bottom-4 bg-red-500 shadow-lg left-4  lg:left-0 lg:bottom-0  md:flex md:justify-center lg:w-[50%] xl:w-[45% ]">
       
          <div className="flex justify-end items-end w-full">
          <div className="flex items-center gap-3 lg:gap-6 pr-12 py-8  ">
            {/* Round Image */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-2 border-y-gray-300">
              <Image
                src={pic}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div> 
            {/* Comments */}
            <div className="ml-10 bg-gradient-to-r from-gray-500 via-white to-white 
               bg-clip-text text-transparent">
              <p className="text-xl lg:text-3xl font-bold font-playFair  ">Adv. Mohammad Mohsin</p>
              <p className="text-sm lg:text-base font-medium text-right">M.A, LLB, LL.M</p>
              <div className="flex items-center justify-end">
            <span className="h-2 w-2 rounded-full bg-secondary animate-ping"></span>
            <span className="h-2 w-2 rounded-full bg-secondary"></span>
            <p className="text-sm lg:text-base font-bold  ml-2">Dhaka Joj Court</p>
          </div>
              <div className="text-sm lg:text-base font-medium text-right">
              <span className="typewriter ">Expert On {titles.join(" | ")}</span>
              </div>
            </div>
          </div>
          </div>
          
        </div>  


      </div>
    </div>
  );
}
