import CapriGlobal from "../assests/company/comp1.jpg"
import DataPatten from "../assests/company/dtpatten1.png"
import Fino from "../assests/company/fino.png"
import GaneshHousing from "../assests/company/ganeshhousing.jpg"
import Godawari from "../assests/company/godawari.jpg"
import Gravita from "../assests/company/gravita.jpg"
import InfibeamAvenues from "../assests/company/infibeamavenues.png"
import Meghmani from "../assests/company/meghmani.png"

import Avatar from "../assests/avatar.svg"
import Avatar1 from "../assests/avatar1.svg"
import Avatar2 from "../assests/avatar2.svg"
const companies = [
     { companyName: "Capri Global Capital Ltd.", img: CapriGlobal?.src },
     { companyName: "Data Patterns (India) Ltd.", img: DataPatten?.src },
     { companyName: "Data Patterns (India) Ltd.", img: Fino?.src },
     { companyName: "Ganesh Housing Corporation Ltd.", img: GaneshHousing?.src },
     { companyName: "Godawari Power And Ispat Ltd.", img: Godawari?.src },
     { companyName: "Godawari Power And Ispat Ltd.", img: Gravita?.src },
     { companyName: "Infibeam Avenues Ltd.", img: InfibeamAvenues?.src },
     { companyName: "Meghmani Finechem Ltd", img: Meghmani?.src },
]

const labels = {
     DISCUSSION_FORUM: "Discussion Forum",
     MARKET_STORIES: "Market Stories",
     CONTACT_US: "Contact Us",
     SIGN_IN: "Sign In",
     SIGN_UP: "Sign Up",
     FEATURED_COMPANIES: "Featured Companies",
     COMMENT: "Comments",
     SHARE: "Share",
     FILTERS: "Filters"

}

const otherServices = ["Sentiment", "Market", "Sector", "Watchlist", "Events", "News/Interview"]

const disussionForumCardDummyData = [
     {
          userName: "Lorem Ipsum",
          CompanyImageUrl: InfibeamAvenues?.src,
          likes: "2k",
          comments: "3k",
          views: "5k",
          isLiked: true,
          sector: "Sector 1",
          color: "bg-red-500",
          userImageUrl: Avatar?.src,
          time: "2 min ago",
          message: "Bringing Indian Corporates to Investors. An Investor Relations Company Business opportunities are like buses, there’s always another one coming."
     },
     {
          userName: "David",
          CompanyImageUrl: "",
          likes: "2k",
          comments: "2k",
          views: "2k",
          isLiked: false,
          sector: "Sector 3",
          color: "bg-green-500",
          userImageUrl: Avatar1?.src,
          time: "3 min ago",
          message: "Bringing Indian Corporates to Investors. An Investor Relations Company Business opportunities are like buses, there’s always another one coming."
     },
     {
          userName: "Brad",
          CompanyImageUrl: "",
          likes: "1k",
          comments: "1k",
          views: "9k",
          isLiked: false,
          sector: "Sector 1",
          color: "bg-red-500",
          userImageUrl: Avatar2?.src,
          time: "4 min ago",
          message: "Bringing Indian Corporates to Investors. An Investor Relations Company Business opportunities are like buses, there’s always another one coming."
     },
     {
          userName: "Ayush Mishra",
          CompanyImageUrl: "",
          likes: "3k",
          comments: "3k",
          views: "5k",
          isLiked: true,
          sector: "Sector 3",
          color: "bg-blue-500",
          userImageUrl: Avatar?.src,
          time: "1 min ago",
          message: "Bringing Indian Corporates to Investors. An Investor Relations Company Business opportunities are like buses, there’s always another one coming."
     },
]

const marketStories = [
     {
          imageUrl: InfibeamAvenues?.src,
          content: "Infibeam Avenue Ltd has lending aggregating platform -Trust Avenue. The company did AI-based lending for 3 million merchants through tie-ups with banks and NBFCs."
     },
     {
          imageUrl: CapriGlobal?.src,
          content: "Capri Global Capital Ltd launches Affordable housing loans PRIME and partners with Union Bank of India for Co- Lending to MSMEs"
     },
     {
          imageUrl: DataPatten?.src,
          content: "Data Patterns (India) Ltd. key Products/Revenue Segments include Electronic Components & Equipments and Sale of services for the year ending 31-Mar-2022."
     },
     {
          imageUrl: InfibeamAvenues?.src,
          content: "Infibeam Avenue Ltd has lending aggregating platform -Trust Avenue. The company did AI-based lending for 3 million merchants through tie-ups with banks and NBFCs."
     },
     {
          imageUrl: CapriGlobal?.src,
          content: "Capri Global Capital Ltd launches Affordable housing loans PRIME and partners with Union Bank of India for Co- Lending to MSMEs"
     },
     {
          imageUrl: DataPatten?.src,
          content: "Data Patterns (India) Ltd. key Products/Revenue Segments include Electronic Components & Equipments and Sale of services for the year ending 31-Mar-2022."
     },

]

const stockDetails = [
     { bankName: "NiftyBank", price: 410222.0, rate: "0.01%" },
     { bankName: "HDFCBank", price: 540222.0, rate: "0.69%" },
     { bankName: "Bajfinance", price: 202222.0, rate: "0.5%" },
     { bankName: "Indigo", price: 2043.50, rate: "0.40%" },
     { bankName: "ICICI Back", price: 9022.0, rate: "0.36%" },
     { bankName: "Indusland Bank", price: 4222.0, rate: "0.08%" }
]

const filterDummyObj = [
     {
          sector: "Sector 1",
          color: "bg-red-500"
     },
     {
          sector: "Sector 2",
          color: "bg-green-500"
     },
     {
          sector: "Sector 3",
          color: "bg-blue-500"
     },
]
export { companies, otherServices, labels, disussionForumCardDummyData, marketStories, stockDetails, filterDummyObj }