import { Switch, TextField } from "@adobe/react-spectrum";
import {Picker, Item,  Provider, defaultTheme} from '@adobe/react-spectrum'
import TerminalCard from "./TerminalCard";
import { SlCloudUpload } from "react-icons/sl";
import {FileTrigger, Button} from '@adobe/react-spectrum';
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
function TerminalsTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');

  const openDialog = () => setIsOpen(true);
  const closeDialog = () => setIsOpen(false);
  const handleSubmit = () => {
    console.log(`Title: ${title}`);
    setIsOpen(false);
  };
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm">
          <div className="relative w-full max-w-md p-8 bg-white rounded shadow-lg">
            <h2 className="mb-4 text-lg font-bold">Terminal Name</h2>
            <div className="min-w-[2px] min-h-[2px] mb-3 bg-yellow-100"></div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Type the title..."
              className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></input>
            <div className="flex justify-between">
            <FileTrigger
                        onSelect={(e) => {
                          let files = Array.from(e);
                          let filenames = files.map((file) => file.name);
                          setFile(filenames);
                        }}>
                       <Button staticColor="goldenrod" UNSAFE_style={{color:"black",alignItems:"center",alignSelf:"center",top:"3px",backgroundColor:"beige" , gap:"5px"}}><SlCloudUpload></SlCloudUpload> Upload</Button>
                      </FileTrigger>
              <button
                onClick={closeDialog}
                className="px-4 py-2 font-semibold text-white bg-black rounded-lg hover:bg-slate-800"
              >
                Cancel
              </button>
            </div>
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
                      
                      <Button UNSAFE_style={{color:"white",alignItems:"center",alignSelf:"center",backgroundColor:"black", marginLeft:"150px" , gap:"5px"}}>Save</Button>
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