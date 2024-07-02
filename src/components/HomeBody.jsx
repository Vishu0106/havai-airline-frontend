import {Button , Provider, Text, defaultTheme, lightTheme } from '@adobe/react-spectrum'
import { MdOutlineAdd } from "react-icons/md";
import ListAirports from './ListAirports';
import 'tailwindcss/tailwind.css';
import { useNavigate , useHref } from 'react-router-dom';
function HomeBody() {
  let navigate = useNavigate();
  return (
    <Provider theme={lightTheme} colorScheme="light" router={{navigate,useHref}}>
    <div className="bg-[#ffffff] min-h-[90vh] flex flex-col min-w-[83vw] max-w-[83vw]">
        <div className="flex justify-between items-center pt-3 px-4 mb-4">
              <h1 className="subpixel-antialiased text-lg font-semibold p-2 font-sans text-black">Airports</h1>
              <Button variant="accent" staticColor='black'><span className='flex justify-center items-center gap-1'><MdOutlineAdd className='text-lg'/><p className='text-[14px] font-semibold'>Add new</p></span></Button>         
        </div>
        <div className='px-5 max-w-[76vw] min-w-[76vw]'>
          <ListAirports />
        </div>
    </div>
    </Provider> 
  )
}

export default HomeBody