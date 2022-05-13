import React from "react";
// import { ComponentB } from "./CONTEXT(what i understand)/ComponentB";
// import { ComponentC } from "./CONTEXT(what i understand)/ComponentC";
import ClickCounter from "./HOC_Example/ClickCounter";
import HoverCounter from "./HOC_Example/HoverCounter";
import ClickCounter1  from "./RenderProps_Example/ClickCounter1";
import  HoverCounter1  from "./RenderProps_Example/HoverCounter1";





// export const UserContext=React.createContext()
// export const UserContext=React.createContext();
// export const UserContext1=React.createContext()
function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      {/* <UserContext.Provider value={"Sathya"}>
      <ComponentC/> 
      </UserContext.Provider>
      <UserContext1.Provider value={"S"}>
      <ComponentB/> 
      </UserContext1.Provider> */}
      {/* <ClickCounter/>
      <HoverCounter/> */}
      <HoverCounter1/>
      <ClickCounter1/>
      
      {/* <UserContext.Provider value={"Satya"}>
      <ComponentC/>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
