import React from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import 'material-symbols/outlined.css'
function Sidebar(props) {

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-3 bg-ctp-crust w-min h-full flex flex-col">
        {props.children}
      </div>
    </DndProvider>

    )
}


export default Sidebar