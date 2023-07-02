'use client'
import { useState } from "react"
import CompanyBanner from "./CompanyBanner"
import DicusssionForm from "./DicusssionForum"
import LeftSideBar from "./LeftSideBar"
import MarkestStories from "./MarkestStories"
import { labels } from "@/constants"
const MainComponent = () => {
     const [openSideBar, setOpenSideBar] = useState(true)
     const [tab, setTab] = useState(labels?.DISCUSSION_FORUM)
     return (
          <main className="relative bg-[#F4F4F4] min-h-[82vh] w-full overflow-hidden mb-20 xl:mb-0">
               <CompanyBanner />

               <div className="w-full overflow-hidden flex flex-col xl:flex-row relative -mt-2 ">
                    <LeftSideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} />

                    <div className="xl:hidden w-full text-white flex">
                         <div className={`w-1/2 px-2 py-2 cursor-pointer text-center ${tab === labels?.DISCUSSION_FORUM ? "border-b-2 border-red-500 bg-[#132842]" : "bg-[#1D3B61]"}`} onClick={() => setTab(labels?.DISCUSSION_FORUM)}>
                              {labels?.DISCUSSION_FORUM}
                         </div>
                         <div className={`w-1/2 px-2 py-2 cursor-pointer text-center ${tab === labels?.MARKET_STORIES ? "border-b-2 border-red-500 bg-[#132842]" : "bg-[#1D3B61]"}`} onClick={() => setTab(labels?.MARKET_STORIES)}>
                              {labels?.MARKET_STORIES}
                         </div>
                    </div>
                    <DicusssionForm tab={tab} />
                    <MarkestStories openSideBar={openSideBar} tab={tab} />
               </div>
          </main>
     )
}

export default MainComponent