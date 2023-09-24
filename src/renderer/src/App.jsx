import SidebarItem from './components/sidebar/SidebarItem'
import Sidebar from './components/sidebar/Sidebar'
import MaterialSymbol from './components/MaterialSymbols'

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

          <div className="cursor-pointer">
            <SidebarItem symbol="folder_open" active/>
            <SidebarItem symbol="search"/>
            <SidebarItem symbol="extension"/>
            <SidebarItem symbol="account_circle"/>
            <SidebarItem symbol="settings"/>
            <SidebarItem symbol="notifications_off"/>
            
          </div>
        </Sidebar>

      </div>
    </div>
  )
}

