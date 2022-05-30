import React from "react";
import ClickCounter1 from "./RenderProps_Example/ClickCounter1";
import Counter from "./RenderProps_Example/Counter";
import HoverCounter1 from "./RenderProps_Example/HoverCounter1";
import User from "./RenderProps_Example/User";
function App(){
  return(
    <div>
      <h2>Hello</h2>
      <Counter render={(count,handleClick)=><ClickCounter1 count={count} handleClick={handleClick}/>}/>
      <Counter render={(count,handleClick)=><HoverCounter1 count={count} handleClick={handleClick}/>}/>
      <User render={(isLoggedIn)=>(isLoggedIn ?"Satya" :"Guest")}/>
    </div>
  )
}
export default App;
