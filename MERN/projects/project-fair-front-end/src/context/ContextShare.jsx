import React,{useState,createContext} from "react"

export const addProjectResponseContext = createContext();
function ContextShare ({children}) {
  // children is a predefined props name used to share data between components
  // Creating a state that needs to be shared
  const [addProjectResponse, setAddProjectResponse] = useState([]);
  
  return (
    <>
      <addProjectResponseContext.Provider value={{addProjectResponse, setAddProjectResponse}}> 
          {children}
      </addProjectResponseContext.Provider>

    </>
  )
}

export default ContextShare;
