function Sidebar(props) {
  return (
    <div className="p-3 bg-ctp-crust w-min h-full flex flex-col">
      {props.children}
    </div>
  )
}


export default Sidebar