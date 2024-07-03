/* eslint-disable react/prop-types */
import { MdMoreHoriz } from "react-icons/md";
import imagePath from "../assets/Image.png";
function TerminalCard({value}) {
  return (
            
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 w-[280px] h-[104px]">
    <div>
    <img className="object-cover min-w-[104px] min-h-[104px] rounded-t-lg  md:h-auto md:w-38 md:rounded-none md:rounded-s-lg" src={imagePath} alt="Image" />
    </div>
    <div className="flex flex-col p-2">
        <div className='flex flex-col top-[-30px] justify-start items-start'>
            <div className='flex items-cneter justify-around gap-11'>
                <p className="font-semibold text-lg">{`Terminal ${value}`}</p>
                <p className="text-2xl"><MdMoreHoriz className="cursor-pointer"/></p>
            </div>
            <div className="text-wrap font-sans">
                Lorem ipsum dolor sit amet.
                Lorem ipsum, dolor sit amet consectetur.
            </div>
        </div>
    </div>
   </div>
  )
}

export default TerminalCard