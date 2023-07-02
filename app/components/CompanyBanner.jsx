
import { companies, labels } from '@/constants'
const CompanyBanner = () => {
     return (
          <div className="py-2 w-full z-0 relative" style={{ zIndex: 0 }}>
               <h3 className="hidden xl:block text-red-500 uppercase font-medium mx-5 mb-1">{labels?.FEATURED_COMPANIES}</h3>
               <div className="space-x-6 flex justify-between py-1 hideScrollbar overflow-x-scroll px-10 xl:bg-[#E7F0FB]">
                    {companies.map((company, index) => (
                         <img src={company?.img} alt={company?.companyName} className="rounded-full w-12 h-12 object-contain xl:rounded-none xl:w-16 xl:h-12 border border-red-400 xl:border-none" key={`image_${index}`} />
                    ))}
               </div>
          </div>
     )
}

export default CompanyBanner