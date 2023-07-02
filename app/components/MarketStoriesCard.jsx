const MarketStoriesCard = ({ story }) => {
     return (
          <div className="w-[90%] mr-5 xl:mr-0 xl:w-[200px] relative h-[150px] rounded overflow-hidden">
               <img src={story?.imageUrl} alt="company"
                    className="h-full w-full object-cover rounded-sm" />
               <p className="absolute bottom-0 w-full text-[8px] xl:text-[10px] bg-[rgba(0,0,0,0.5)] text-white px-2 py-2 rounded-t-lg">
                    {story?.content}
               </p>
          </div>
     )
}

export default MarketStoriesCard