import logo from './logo.svg';
import './App.css';
import Users from './Users(Without Redux)';
import Users_Redux from './Users_Redux(With Redux)';

function App() {
  return (
    <div className="App">
      <h2>Hello I Am From App Component</h2>
      {/* <Users/> */}
      <Users_Redux/>
    </div>
  );
}

export default App;
