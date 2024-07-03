import TerminalCard from "./TerminalCard"
function TerminalsTab() {
  return (
   <div className="min-h-[18vh] w-auto flex gap-8 p-4 ">
        <TerminalCard value="1"/>
        <TerminalCard value="2"/>
   </div>
  )
}

export default TerminalsTab