import './App.css';
import { ContainerComp } from './Context/ContainerComp';
import Students from './Students';
// import { Cricket } from './Cricket';
// import ClickCounter from './HigherOrderComponent/ClickCounter';
// import HoverCounter from './HigherOrderComponent/HoverCounter';
// import { MyCompContainer } from './RenderProps/MyCompContainer';
// import HoverCounter from './HigherOrderComponent/HoverCounter';
// import ComponentsContainer from './PureComponents.jsx/ComponentsContainer';
// import ParentComponent from './ReferenceComponent/ParentComponent';
// import { Sports } from './Sports';
// import { Users } from './Users';
// import { UsersFunc } from './UsersFunc';


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>

      {/* <Users/> */}
      {/* <UsersFunc/> */}
      {/* <Cricket/> */}
      {/* <Sports/> */}
      {/* <ParentComponent/> */}
      {/* <ComponentsContainer/> */}
      {/* <ClickCounter /> */}
      {/* <hr/> */}
      {/* <HoverCounter/> */}
      {/* <MyCompContainer/> */}
      {/* <ContainerComp/> */}
      <Students/>
      
    </div>
  );
}

export default App;
