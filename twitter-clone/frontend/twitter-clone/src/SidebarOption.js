import React from 'react'
import "./SidebarOption.css";

function SidebarOption({title,Icons, active}) {
  return (
    <div className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icons />
        <h2> {title} </h2>
    </div>
  )
}

export default SidebarOption