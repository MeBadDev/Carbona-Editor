import React from 'react'
import { useDrag } from 'react-dnd'
import { DRAG_TYPE } from '../constants'
import MaterialSymbol from '../MaterialSymbols'
function SidebarItem(props) {
  const [{ isDragging }, drag] = useDrag({
    type: DRAG_TYPE.sidebar,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const activeClass = props.active ? "transform pb-2 scale-125 my-2" : "";
  const symbolClass = props.active ? "text-ctp-yellow" : "hover:hover:text-ctp-yellow ";
  return (<button onClick={props.onClick} className={`opacity-${isDragging ? '50' : '100'} p-3 rounded-md origin-center hover:scale-125 ease-in-out duration-300 ${activeClass}`} ref={drag}>
    <MaterialSymbol symbol={props.symbol} size="xl" style={`!font-light duration-300 ${symbolClass}`} />
  </button>)
}

export default SidebarItem