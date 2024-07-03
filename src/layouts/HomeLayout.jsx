/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SideMenu from "../components/SideMenu";
function HomeLayout({ children }) {
    const imageAddress = "https://s3-alpha-sig.figma.com/img/fb96/d6f0/4db45efd3340ef80a549531cff981068?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L5tzqHUVS7uR9BzFcIld-swG7raSI94tfM42bBtryEjxPSqGmrmX3uel~Qp53S6HFWuXOMVMfqmBzy9H~E1EUwgVEZiPCPddD8wG6v3zAK39xdY6bdyZ-T061QrT0-tGkjo2a36PlKkRbIXrI5eayUy-RoZQTFb~0p3nDPfZCHdgH-q-70gwpIIUfpN3CH44vsv4azr21dPRH9zDoOY9xyX3qW6-8cJ87IgSB~nhdhvpXwHlJr6oKwrE9rdk6~qp09ZUIFxaw7rdMlvEAnGdV4WBq5oSz-EZg3yPf5jxs8h0Tkx2ZpxWRdQXVFEPD8a2t97j1FoMb6GRRZap8geY3A__";
  return (
    <div className="h-[100vh] flex bg-[#F5F5F5] gap-1 flex-col">
        <div className="h-[9vh] w-auto bg-[#FFFFFF] flex justify-between items-center p-4">
            <Link to={"/"}  className="text-[#000000] w-[136px] h-[20px] left-[20px] font-bold text-2xl subpixel-antialiased font-sans">hava havai</Link>
            <img src={imageAddress} alt="Profile" className="w-[32px] h-[32px] border rounded-xl"/>
        </div>
        <div className="flex gap-1 min-h[91vh] ">
            <SideMenu/>
            {children}
        </div>
    </div>
  )
}

export default HomeLayout