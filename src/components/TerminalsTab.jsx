import { Switch, TextField } from "@adobe/react-spectrum";
import {Picker, Item, Section, Provider, defaultTheme} from '@adobe/react-spectrum'
import TerminalCard from "./TerminalCard";
import { SlCloudUpload } from "react-icons/sl";
import {FileTrigger, Button} from '@adobe/react-spectrum';
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
function TerminalsTab() {
  const [isOpen, setIsOpen] = useState(false);

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const [file, setFile] = useState(null);
  return (
   <div className="min-h-[18vh] w-auto flex flex-col">
        <div className="flex p-4 gap-8 justify-start items-center">
        <TerminalCard value="1"/>
        <TerminalCard value="2"/>
        <button
        onClick={openDialog}
        className="p-1 px-2 font-semibold text-black bg-white hover:bg-slate-100 border border-black rounded-3xl flex justify-center items-center gap-1">
        <FaPlus/> Add Terminal
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-80">
          <div className="relative w-full max-w-md p-8 bg-white rounded shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Dialog Title</h2>
            <p className="mb-4">This is the dialog content.</p>
            <button
              onClick={closeDialog}
              className="px-4 py-2 font-semibold text-white bg-black rounded hover:bg-slate-800"
            >
              Close
            </button>
          </div>
        </div>
      )}




        </div>
        <Provider theme={defaultTheme} colorScheme="light">
        <div className="bg-white mt-7">
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
  )
}

export default TerminalsTab