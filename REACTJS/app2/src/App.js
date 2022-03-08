
import './App.css';
import { Employees } from './Functional_Components/Employees';
import { Students } from './Functional_Components/Students';


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      {/* <Murali />
      <Krishna />
      <Sam />
      <Kiran />
      <Abc/> */}

      <Students/>
      <Employees/>
    </div>
  );
}

export default App;
