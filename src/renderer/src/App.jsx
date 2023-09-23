import "../../../node_modules/electron-tabs/dist/electron-tabs"
export default function App() {
  return (
    <>
      <tab-group></tab-group>


      <div className="w-full h-full absolute bg-ctp-base">
        <Sidebar />
      </div>
    </>
  )
}

function Sidebar() {
  return (
    <div className="p-3 bg-ctp-crust w-min h-full flex flex-col">
      <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
      <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
      <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
      <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
      <div className="w-12 aspect-square bg-ctp-blue m-1"></div>
    </div>
  )
}