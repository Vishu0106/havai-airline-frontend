import { NavLink } from "react-router-dom"
import { MdHome } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
function SideMenu() {
  return (
    <div className='bg-[#ffffff] min-h-[90vh] min-w-[16vw] flex-col'>
      {/* This is a frst part of side menu */}
        <div className="pl-2 pt-7 pr-2 ">
            <ul className="flex flex-col gap-2">
                <li>
                <NavLink
                  to='/'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <span className="flex justify-start items-center gap-2"> <MdHome className="h-[18px] w-[18px]"/> <p className="subpixel-antialiased text-sm font-sans">Home </p></span>
                </NavLink>
                </li>
                <li>
                <NavLink
                  to='/dashboard'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <span className="flex justify-start items-center gap-2"> <MdOutlineDashboard className="h-[18px] w-[18px]"/> <p className="subpixel-antialiased text-sm font-sans">Dashboard </p></span>
                </NavLink>
                </li>
            </ul>
        </div>
        <div className="pl-2 pt-5 pr-2 ">
            <h1 className="subpixel-antialiased text-lg font-semibold p-2 font-sans">Services</h1>
            <ul className="flex flex-col gap-1">
                <li>
                <NavLink
                  to='/airports'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <p className="subpixel-antialiased text-sm text-black font-sans">Airports </p>
                </NavLink>
                </li>
                <li>
                <NavLink
                  to='/videos'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <p className="subpixel-antialiased text-sm font-sans">Videos </p>
                </NavLink>
                </li>
            </ul>
        </div>
        <div className="pl-2 pt-5 pr-2 ">
            <h1 className="subpixel-antialiased text-lg font-semibold p-2 font-sans">Others</h1>
            <ul className="flex flex-col gap-1">
                <li>
                <NavLink
                  to='/others/1'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <p className="subpixel-antialiased text-sm text-black font-sans">List1 </p>
                </NavLink>
                </li>
                <li>
                <NavLink
                  to='/others/2'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <p className="subpixel-antialiased text-sm font-sans">List2 </p>
                </NavLink>
                </li>
                <li>
                <NavLink
                  to='/others/3'
                  className={({ isActive }) =>
                    `cursor-pointer text-sm ${isActive ? 'bg-[#F5F5F5]' : 'bg-[#FFFFFF]'} rounded-lg block min-w-[14vh] p-2 font-sans`
                    }
                >
                    <p className="subpixel-antialiased text-sm font-sans">List3 </p>
                </NavLink>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default SideMenu;