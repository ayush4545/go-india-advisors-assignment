'use client'
import { FaUser } from "react-icons/fa"
import { IoMdNotifications, IoMdArrowDropdown } from "react-icons/io"
import { BiSolidMessageDetail } from "react-icons/bi"
import { HiCurrencyDollar } from "react-icons/hi"
import { otherServices, labels } from "@/constants"
const LeftSideBar = ({ openSideBar, setOpenSideBar }) => {
     return (
          <div className={`h-screen  flex items-center ${openSideBar ? "w-[50%] xl:w-[15%]" : " w-[5%] xl:w-[2%]"} xl:relative  z-20 fixed top-28 xl:top-0`} >
               <div className={` bg-[#1D3B61] duration-75 transition-all h-full ${openSideBar ? "w-[90%] translate-x-0 " : "w-[0px] -translate-x-[200px] "}`}>
                    <div className="flex flex-row justify-between text-white items-center py-3 px-1 text-sm xl:text-lg border-b-[1px] border-gray-400">
                         <div className="flex items-center justify-between ml-2 space-x-1">
                              <FaUser className=" text-md xl:text-2xl" />
                              <p className="text-[8px] md:text-[12px] xl:text-sm font-normal">Hello, User</p>
                         </div>
                         <div className="relative mr-2">

                              <IoMdNotifications className="text-md xl:text-2xl" />
                              <div className="bg-red-500 w-1 h-1 rounded-full absolute xl:top-1 xl:right-1 -top-[0.5px] right-[1px]" />
                         </div>
                    </div>

                    <div className="bg-[#132842] flex items-center py-2 px-1 mt-2 text-white justify-between">
                         <div className="flex items-center space-x-1 ml-2">
                              <BiSolidMessageDetail className=" text-sm xl:text-[12px]" />
                              <p className=" text-[8px] md:text-[10px] xl:text-[12px]">{labels?.DISCUSSION_FORUM}</p>
                         </div>
                         <IoMdArrowDropdown className="text-[12px] xl:text-[12px]" />
                    </div>
                    <div className="flex items-center  text-white px-1 mt-1">

                         <HiCurrencyDollar className=" text-sm xl:text-[12px] ml-2" />
                         <p className="text-[8px] md:text-[10px] xl:text-[12px] ml-1">{labels?.MARKET_STORIES}</p>
                    </div>

                    {otherServices.map((service) => (
                         <p key={service} className="text-white ml-7 text-[8px] md:text-[10px] xl:text-[12px] mt-3">
                              {service}
                         </p>
                    ))}


               </div>
               <div className="h-[60px] bg-[#1D3B61] flex items-center rounded-r-sm" onClick={() => setOpenSideBar(!openSideBar)}>
                    <IoMdArrowDropdown className="text-white -rotate-90" />
               </div>
          </div>
     )
}

export default LeftSideBar