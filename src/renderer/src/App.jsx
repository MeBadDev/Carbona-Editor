import SidebarItem from './components/sidebar/SidebarItem'
import Sidebar from './components/sidebar/Sidebar'

export default function App() {
  return (
    <Editor />
  )
}



function Editor() {
  return (
    <div className=" w-full h-full absolute">
      <div className="w-full h-full absolute bg-ctp-base overflow-hidden min-h-0">
        <Sidebar>
          <SidebarItem/>
          <SidebarItem/>
          <SidebarItem/>
          <SidebarItem/>
          <SidebarItem/>
          
        </Sidebar>
      </div>
    </div>
  )
}

