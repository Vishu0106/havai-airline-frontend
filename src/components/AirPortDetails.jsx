import HomeLayout from "../layouts/HomeLayout"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";


import Tabs from "./Tabs";
function AirPortDetails() {
    const Airports = useSelector((state) => state.airports);
    const {id }= useParams();
    const airportName = Airports.airports.find((airport) => airport.id === id);
  return (
    <HomeLayout>
     <div className='bg-[#ffffff] min-h-[90vh] min-w-[83vw] max-w-[83vw]'>
        <p className="flex p-4 h-[32px]"><span className="flex justify-center items-center font-medium text-gray-600"><Link to='/airports'>Airports</Link> <MdKeyboardArrowRight className="text-2xl left-[-10px] text-black"/><span className="font-semibold text-black cursor-pointer">{`${airportName?.name || "AirportName"}`}</span></span></p>
        <h1 className="pl-4 pt-1 text-[34px] text-black font-bold font-sans">{airportName?.name || "AirportName"}</h1>
        <div className="p-4">
            <Tabs />
        </div>
        
     </div>
      
    </HomeLayout>
  )
}

export default AirPortDetails