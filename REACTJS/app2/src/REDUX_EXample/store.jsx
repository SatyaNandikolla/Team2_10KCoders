import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer"

const middleware=[thunk]
const store=createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;

//APP>JS CONTENT
// import React from "react";
// import {connect} from "react-redux";
// import { IncAction } from "./REDUX_EXample/actions";
// import { DecAction } from "./REDUX_EXample/actions";
// function App({local_variable,IncAction,DecAction}) {
//   return (
//     <div className="App">
//       <h2>{local_variable}</h2>
//       <button onClick={()=>IncAction(5)}>Increment</button>
//       <button onClick={DecAction}>Decrement</button>
     
//     </div>
//   );
// }
// const mapStateToPrps=state=>({
//   local_variable:state
// })

// export default connect(mapStateToPrps,{IncAction,DecAction})(App);

