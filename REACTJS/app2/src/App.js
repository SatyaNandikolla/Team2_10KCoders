import './App.css';
import React from "react";
import { ComponentC } from './CONTEXT(what i understand)/ComponentC';


export const UserContext=React.createContext()
function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>

      
      <UserContext.Provider value={"Satya"}>
      <ComponentC/>
      </UserContext.Provider>
      
      
      
    </div>
  );
}

export default App;
