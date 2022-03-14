import './App.css';
import { Cricket } from './Cricket';
import ComponentsContainer from './PureComponents.jsx/ComponentsContainer';
import ParentComponent from './ReferenceComponent/ParentComponent';
import { Sports } from './Sports';
import { Users } from './Users';
import { UsersFunc } from './UsersFunc';


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      
  {/* <Users/> */}
  {/* <UsersFunc/> */}
  {/* <Cricket/> */}
  {/* <Sports/> */}
  {/* <ParentComponent/> */}
  <ComponentsContainer/>
  
    </div>
  );
}

export default App;
