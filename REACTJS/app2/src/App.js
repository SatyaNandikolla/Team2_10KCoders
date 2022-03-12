
import './App.css';
import { ClassRoom } from './ClassRoom';
import { Employees } from './Functional_Components/Employees';
import { Students } from './Functional_Components/Students';
import LifeCycleComp from './LifeCycles/LifeCycleComp';
import { User } from './User';


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      {/* <Murali />
      <Krishna />
      <Sam />
      <Kiran />
      <Abc/> */}
      {/* <ClassRoom/> */}
      {/* <User/> */}
    {/* <Students/>
    <Employees/> */}
    <LifeCycleComp/>
    </div>
  );
}

export default App;
