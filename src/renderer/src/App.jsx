import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'


export default function App() {

  return (
    <Editor />
  )
}

function Sidebar() {

  return (
    <div className="p-3 bg-ctp-crust w-min h-full flex flex-col">
      <DndProvider backend={HTML5Backend}>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
        <SidebarItem/>
      </DndProvider>
    </div>
  )
}

function Editor() {
  return (
    <div className=" w-full h-full absolute">
      <div className="w-full h-full absolute bg-ctp-base overflow-hidden min-h-0">
        <Sidebar />
      </div>
    </div>
  )
}

function SidebarItem() {
  return (
    <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
  )
}