import { BiSolidHomeCircle } from "react-icons/bi"
import { AiOutlineWindows } from "react-icons/ai"
import { TiMessages } from "react-icons/ti"
import { LuListChecks } from "react-icons/lu"
import { PiDotsNineBold } from "react-icons/pi"

const BottomButtons = () => {
     return (
          <div className=" fixed z-30 bottom-0 w-full h-[25px] text-white xl:hidden flex item-center justify-around bg-[#1D3B61]">
               <AiOutlineWindows className="h-full" />
               <PiDotsNineBold className="h-full" />
               <BiSolidHomeCircle className="h-full border-b-2 border-red-500" />
               <TiMessages className="h-full" />
               <LuListChecks className="h-full" />
          </div>
     )
}

export default BottomButtons