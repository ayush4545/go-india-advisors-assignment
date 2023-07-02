import Image from "next/image"
import logo from "../../assests/logo.png"
import { FiSearch } from "react-icons/fi"
import Link from "next/link"
import Avatar from "../../assests/avatar.svg"
import { labels } from '@/constants'
const Header = () => {
     return (
          <header className="flex justify-between h-[10.5vh] xl:h-[12vh] bg-white items-center px-5 w-full">
               <div className="flex items-center justify-between  space-x-6 w-[90%] xl:w-[60%]">
                    <Link href="/">
                         <Image src={logo} alt="logo" width={56} height={56} className=" object-contain" />
                    </Link>


                    <div className="bg-[#D5D5D5] flex items-center  rounded h-[40px] w-full pr-3 ml-3 xl:ml-5 shadow-inner">
                         <input type="text" className="w-full outline-none bg-transparent px-3" />
                         <FiSearch />
                    </div>
               </div>
               <div className="w-[10%] xl:w-[30%] ml-10">
                    <div className="hidden xl:flex items-center justify-evenly ">
                         <p className="capitalize text-sm">{labels?.CONTACT_US}</p>
                         <button className="rounded border-[1px] border-gray-400 px-4 py-2 uppercase text-sm font-medium">
                              {labels?.SIGN_UP}
                         </button>
                         <button className="rounded border-[1px] border-gray-400 px-4 py-2 uppercase text-sm font-medium">
                              {labels?.SIGN_IN}
                         </button>
                    </div>
                    <div className="inline-flex xl:hidden">
                         <Image src={Avatar} alt="avatar" width={24} height={24} className=" object-contain" />
                    </div>
               </div>
          </header>
     )
}

export default Header