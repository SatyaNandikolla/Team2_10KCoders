                                  //this code for Context 
// import React from "react";
// import { ComponentC } from "./CONTEXT(what i understand)/ComponentC";

// export const UserContext=React.createContext()

// export default function App(){
//    return(
//     <div>
//       <UserContext.Provider value={"Satya"}>
//         <ComponentC/>
//         </UserContext.Provider>   
//     </div>
//   )
// }


import React from "react";
import { ComponentContainer } from "./Pure Components/ComponentContainer";
import Students from "./Students";
import Users from "./Users";



export default function App(){
   return(
    <div>
         {/* <ComponentContainer/> */}
         {/* <Students/> */}
         <Users/>
    </div>
  )
}