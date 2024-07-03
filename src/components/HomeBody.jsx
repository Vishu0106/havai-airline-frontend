import {Button , Provider, defaultTheme } from '@adobe/react-spectrum'
import { MdOutlineAdd } from "react-icons/md";
import ListAirports from './ListAirports';
import 'tailwindcss/tailwind.css';
import { useNavigate , useHref, Link } from 'react-router-dom';
import EditDeleteIcon from './EditDeleteIcon';
import { useSelector } from 'react-redux';
function HomeBody() {
  const airports = useSelector((state) => state.airports);
  let navigate = useNavigate();
  return (
    <Provider theme={defaultTheme} colorScheme='light' router={{navigate,useHref}}>
    <div className="bg-[#ffffff] min-h-[90vh] flex flex-col w-[83vw] max-w-[83vw]">
        <div className="flex justify-between items-center pt-3 px-4 mb-4">
              <Link to={"/airpots"} className="subpixel-antialiased text-lg font-semibold p-2 font-sans text-black">Airports</Link>
              <Button variant="accent" staticColor='black'><span className='flex justify-center items-center gap-1'><MdOutlineAdd className='text-lg'/><p className='text-[14px] font-semibold'>Add new</p></span></Button>         
        </div>
        <div className='pl-5  min-w-[76vw] flex gap-2'>
          <ListAirports />
          <div className='pt-[38px]'>
           {
              airports.airports.map((airport) => (
                <div key={airport.id} className='p-1'><EditDeleteIcon key={airport.id} id={airport.id}/></div>
              ))
           }
          </div>
        </div>
    </div>
    </Provider> 
  )
}

export default HomeBody