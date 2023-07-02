import { useEffect, useState } from "react";
import MarketStoriesCard from "./MarketStoriesCard";
import { labels } from "@/constants";

const fetchMarketStoriesData = async () => {
     const response = await fetch("/api/marketStories");
     const data = await response.json();
     return data;
};
const MarkestStories = ({ openSideBar, tab }) => {
     const [marketStoriesData, setMarketStoriesData] = useState(null);

     useEffect(() => {
          const getData = async () => {
               const data = await fetchMarketStoriesData();
               setMarketStoriesData(data);
          };

          getData();
     }, []);
     return (
          <div
               className={`ml-10 ${openSideBar ? "xl:w-[20%]" : "xl:w-[40%]"} xl:block ${tab === labels?.MARKET_STORIES ? "block w-full" : "hidden"
                    }`}
          >
               <p className="hidden xl:block text-red-500 uppercase font-medium  mt-5">
                    {labels?.MARKET_STORIES}
               </p>

               <div
                    className={`grid mt-[34px] ${openSideBar ? "grid-cols-1" : "xl:grid-cols-2"
                         }  overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg scrollbar-track-gray-400/20 scrollbar-thumb-white scrollbar-thumb-shadow-inner gap-4 disussionForumCard sm:h-[60vh] md:h-[55vh] xl:h-[55vh] h-[60vh] lg:h-screen`}
               >
                    {marketStoriesData !== null ? (
                         marketStoriesData?.map((story, index) => (
                              <MarketStoriesCard story={story} key={`story_${index}`} />
                         ))
                    ) : (
                         <h1>Loading .... </h1>
                    )}
               </div>
          </div>
     );
};

export default MarkestStories;
