// Component rendered in root-wrapper.js

import React from "react"
import sublinks from "../constants/links"

// React.createContext() fn returns Provider & Consumer

// GatsbyContext.Provider - takes 'value' prop


const GatsbyContext = React.createContext();

const GatsbyProvider = ({children}) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)
  const [links, setLinks] = React.useState(sublinks)

  const showSidebar = ()=>{
    setIsSidebarOpen(true);
  }
  const hideSidebar = ()=>{
    setIsSidebarOpen(false);
  }

  return <GatsbyContext.Provider value={{isSidebarOpen, links, setLinks, showSidebar, hideSidebar}}>
    {children}
  </GatsbyContext.Provider>
}


export {GatsbyContext, GatsbyProvider}
