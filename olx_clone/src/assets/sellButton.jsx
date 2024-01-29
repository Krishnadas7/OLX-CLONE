import React from 'react'
import SellButtonPlus from './sellPlusButton'
function SellButton() {
const style={borderLeft:"7px solid #FFCE32",borderRight:"7px solid #FFCE32",borderTop:"7px solid #23E5DB",borderBottom:"7px solid #3A77FF",boxShadow:"1px 3px 5px 1px rgba(0,0,0,0.2)"}
  return (
    <>  
      <button className=' h-[48px] w-[104px] rounded-full font-bold' style={style}>
     <SellButtonPlus/> SELL
    </button>
    </>

  )
}

export default SellButton