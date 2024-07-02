import {Button , Provider, Text, defaultTheme } from '@adobe/react-spectrum'
import { MdOutlineAdd } from "react-icons/md";
import 'tailwindcss/tailwind.css'
function HomeBody() {
  return (
    <Provider theme={defaultTheme}>
    <div className="bg-[#ffffff] min-h-[90vh] flex flex-col min-w-[83vw]">
        <div className="flex justify-between items-center bg-white pt-3 px-3 mb-4">
              <h1 className="subpixel-antialiased text-lg font-semibold p-2 font-sans text-black">Airports</h1>
              <Button variant="accent" staticColor='black'><span className='flex justify-center items-center gap-1'><MdOutlineAdd className='text-lg'/><p className='text-[14px] font-semibold'>Add new</p></span></Button>         
        </div>
        <div>

        </div>
    </div>
    </Provider> 
  )
}

export default HomeBody