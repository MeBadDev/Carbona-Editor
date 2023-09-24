import React from 'react'
import { useDrag } from 'react-dnd'
import { DRAG_TYPE } from '../constants'
import MaterialSymbol from '../MaterialSymbols'
function SidebarItem(props) {
    const [{isDragging}, drag] = useDrag({
        type: DRAG_TYPE.sidebar,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      })
    

    return (<div className={`opacity-${isDragging? '50' : '100'} mb-5 rounded-md m-2 hover:!text-ctp-blue cursor-pointer relative hover:py-3 transform hover:scale-125 origin-center ease-in-out duration-300`} ref={drag}>
        <MaterialSymbol symbol={props.symbol} size="xl" style="!font-light transform duration-300 hover:text-ctp-yellow"/>
    </div>)
}

export default SidebarItem