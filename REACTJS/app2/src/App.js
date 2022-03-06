import logo from './logo.svg';
import './App.css';
import { Murali, Krishna, Sam } from './Murali';
import Some from './Narendhra';


function App() {
  return (
    <div className="App">
      <h2>Hello From App</h2>
      <Murali />
      <Krishna />
      <Sam />
      {console.log(Some)} 
    </div>
  );
}

export default App;
