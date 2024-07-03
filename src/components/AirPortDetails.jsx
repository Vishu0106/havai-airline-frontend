import HomeLayout from "../layouts/HomeLayout"
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {Picker, Item, Section, Provider, defaultTheme} from '@adobe/react-spectrum'
import {TextField} from '@adobe/react-spectrum'
import {Switch} from '@adobe/react-spectrum'
import { SlCloudUpload } from "react-icons/sl";
import {FileTrigger, Button} from '@adobe/react-spectrum';

import Tabs from "./Tabs";
import { useState } from "react";
function AirPortDetails() {
  let [file, setFile] = useState(null);
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
        <Provider theme={defaultTheme} colorScheme="light">
        <div className="bg-white p-2 pl-4">
            <h3 className="font-semibold text-xl">Services</h3>
            <div className="p-1">
                <p>Lost & found</p>
                <div className="min-w-[2px] min-h-[2px] bg-slate-300"></div>
                <div className="mt-4 flex flex-col gap-3">
                      <div className="felx justify-center items-center">
                      <TextField label="Service Name" UNSAFE_style={{paddingRight:"25px"}} defaultValue="Lost&Found" />
                      <Picker label="category" UNSAFE_style={{paddingRight:"25px"}}>
                        <Item key="rarely">Rarely</Item>
                      </Picker>
                      <Picker label="sub category"UNSAFE_style={{paddingRight:"25px"}}>
                        <Item key="rarely">Rarely</Item>
                      </Picker>
                      <Picker label="sub category"UNSAFE_style={{paddingRight:"25px"}}>
                        <Item key="rarely">Rarely</Item>
                      </Picker>
                      <FileTrigger
                        onSelect={(e) => {
                          let files = Array.from(e);
                          let filenames = files.map((file) => file.name);
                          setFile(filenames);
                        }}>
                       <Button staticColor="goldenrod" UNSAFE_style={{color:"black",alignItems:"center",alignSelf:"center", top:"22px",backgroundColor:"beige" , gap:"5px"}}><SlCloudUpload></SlCloudUpload> Upload</Button>
                      </FileTrigger>
                      
                      <Switch UNSAFE_style={{color:"black",alignItems:"center",alignSelf:"center", top:"22px" , left:"25px" , gap:"5px"}}>Show Image</Switch>
                      <div>
                      <TextField label="Description" UNSAFE_style={{paddingRight:"25px"}} width={381} />
                      </div>
                      </div>
                </div>
            </div>
            <div className="mt-3">
            <p>Longue</p>
            <div className="min-w-[2px] min-h-[2px] bg-slate-300"></div>
            </div>
            <div className="mt-3">
            <p>Money Exchange</p>
            <div className="min-w-[2px] min-h-[2px] bg-slate-300"></div>
            </div>
        </div>
        </Provider>
     </div>
      
    </HomeLayout>
  )
}

export default AirPortDetails