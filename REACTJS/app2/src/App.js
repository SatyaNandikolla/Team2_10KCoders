
import './App.css';
import { ClassRoom } from './ClassRoom';
import { Employees } from './Functional_Components/Employees';
import { Students } from './Functional_Components/Students';

import LifeCycleCompB from './LifeCycles/LifeCycleCompB';
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
    {/* <LifeCycleComp/> */}
    <LifeCycleCompB/>
    </div>
  );
}

export default App;
