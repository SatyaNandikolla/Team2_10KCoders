import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./REDUX_EXample/store";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//App.js stuff
// import React from "react";
// import {connect} from "react-redux";
// import { IncAction } from "./REDUX_EXample/actions";
// import { DecAction } from "./REDUX_EXample/actions";


// const App = ({local_Variable,IncAction,DecAction}) => {
//   return (
//     <div>
//         <h2>{local_Variable}</h2>
//         <button onClick={()=>IncAction(5)}>Increment</button>
//         <button onClick={DecAction}>Decrement</button>
//     </div>
//   )
// }
// const mapStateToProps=state=>({
//     local_Variable:state
// })


// export default connect(mapStateToProps,{IncAction,DecAction})(App);