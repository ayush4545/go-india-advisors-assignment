import ForumCards from "./ForumCards"
import SectorLabel from "./SectorLabel"
import { FiSearch } from "react-icons/fi"
import { labels, filterDummyObj } from '@/constants'
import { useEffect, useState } from "react"

const fetchDiscussionForumCardData = async () => {
     const response = await fetch("/api/DiscussionForum")
     const data = await response.json()
     return data
}
const DicusssionForum = ({ tab }) => {
     const [forumData, setForumData] = useState(null)

     useEffect(() => {
          const getData = async () => {
               const data = await fetchDiscussionForumCardData()
               setForumData(data)
          }
          getData()
     }, [])

     return (
          <div className={`z-0 xl:z-0 xl:block ${tab === labels?.DISCUSSION_FORUM ? "block" : "hidden"} snap-y`}>
               <p className="hidden xl:block text-red-500 uppercase font-medium mx-5 mt-5">{labels?.DISCUSSION_FORUM}</p>
               <div className="xl:ml-14 mt-1 h-full  ml-10 " style={{ marginBottom: "10vh" }}>
                    <div className="mb-3">
                         <p className="text-xl text-[#080808] font-semibold">{labels?.FILTERS}</p>
                         <div className="w-[98%] xl:w-full bg-white flex justify-around px-2 py-2 items-center shadow-md mt-1 rounded h-[50px] xl:h-[55px] mr-2">
                              {
                                   filterDummyObj.map((sector) => (
                                        <SectorLabel label={sector?.sector} color={sector?.color} width="w-[80px]" height="h-[23px]" fontsize="text-[14px]" key={sector?.sector} mediumFontSize="text-[10px]" />
                                   ))
                              }
                              <div className="bg-[#E0E0E0] w-[200px] rounded-full flex items-center shadow-inner h-[20px] xl:h-[25px] px-2 ml-1 xl:ml-0">
                                   <FiSearch />
                                   <input type="text" className="w-full outline-none bg-transparent px-3 text-[10px] xl:text-sm h-full" placeholder="Search here" />
                              </div>
                         </div>
                    </div>

                    <div className="sm:h-[60vh] md:h-[50vh] xl:h-[47vh] h-[50vh] lg:h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-white scrollbar-thumb-shadow-inner disussionForumCard snap-center" >
                         {
                              forumData !== null ? forumData?.map((forum) => (
                                   <ForumCards forum={forum} key={forum?.userName} />
                              ))
                                   : <h1>Loading ....</h1>
                         }

                    </div>
               </div>


          </div>
     )
}

export default DicusssionForum