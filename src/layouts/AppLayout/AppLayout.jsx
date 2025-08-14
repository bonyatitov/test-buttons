import React from "react";
import './style.scss';


const AppLayout = ({children}) => {
  return (
    <div className="app-layout">
      {children}
    </div>
  )
}

export default AppLayout;