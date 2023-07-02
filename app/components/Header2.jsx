import { stockDetails } from "@/constants"
const Header2 = () => {

     return (
          <header className="bg-[#19222d] space-x-6 flex  text-white justify-between py-1 hideScrollbar overflow-x-scroll px-10">
               {stockDetails.map((stock, index) => (
                    <div className="space-x-6  flex justify-between" key={`${stock.bankName}_${index}`}>
                         <p className="uppercase w-max">
                              {stock?.bankName}
                         </p>
                         <p>
                              {stock?.price}
                         </p>
                         <p className={`${index % 2 == 0 ? "text-red-500" : "text-green-500"}`}>
                              {stock?.rate}
                         </p>
                    </div>
               ))}
          </header>
     )
}

export default Header2