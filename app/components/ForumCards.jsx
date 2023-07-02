'use client'
import { BsFillSuitHeartFill, BsSuitHeart } from "react-icons/bs"
import { BiComment, BiShareAlt } from "react-icons/bi"
import { LuEye } from "react-icons/lu"
import SectorLabel from "./SectorLabel"
import { labels } from '@/constants'
const ForumCards = ({ forum }) => {

     return (
          <div className="rounded shadow-md  bg-white px-2 py-2 mb-3 mr-2">
               <p className="text-right text-[10px] xl:text-[12px] text-blue-500 px-2 py-1 font-semibold">{forum?.time}</p>
               <div className={`${forum?.CompanyImageUrl !== "" ? "flex" : "hidden"} w-full h-[15%] xl:h-[18%] justify-center items-center bg-green-600`}>
                    <img src={forum?.CompanyImageUrl} className="w-full h-full object-contain" alt="company" />
               </div>
               <div className=" space-x-2 flex items-center ml-5">
                    <img src={forum?.userImageUrl} alt="avatar" className=" w-6 h-6 xl:w-8 xl:h-8 object-contain" />
                    <p className="text-[10px] xl:text-[12px]">{forum?.userName}</p>
                    <SectorLabel label={forum?.sector} color={forum?.color} fontsize="text-[10px]" mediumFontSize="text-[8px]" />
               </div>
               <p className="xl:text-[12px] px-1 py-1 ml-12 text-[10px]">
                    {forum?.message}
               </p>
               <div className="flex items-end justify-around w-full mt-1">
                    <div className="flex items-center space-x-2">
                         {
                              forum?.isLiked ? <BsFillSuitHeartFill className="text-red-500 text-[10px] xl:text-[16px]" />
                                   :
                                   <BsSuitHeart className="text-[10px] xl:text-[16px]" />
                         }
                         <p className="text-[10px] xl:text-[16px]">{forum?.likes}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                         <LuEye className="text-[10px] xl:text-[16px]" />
                         <p className="text-[10px] xl:text-[16px]">{forum?.views}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                         <BiComment className="text-[10px] xl:text-[16px]" />
                         <p className="text-[10px] xl:text-[16px]">{forum?.comments} {labels?.COMMENT}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                         <BiShareAlt className="text-[10px] xl:text-[16px]" />
                         <p className="text-[10px] xl:text-[16px]">{labels?.SHARE}</p>
                    </div>
               </div>

          </div>
     )
}

export default ForumCards