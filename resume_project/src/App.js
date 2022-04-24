import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { About } from "./About";
import { Home } from "./Home";
import { Users } from "./Users";

function App() {
  return (
    <div>
      <h2>Hello From Routing App</h2>
      <BrowserRouter>
      <Link to="/">Home</Link> ||
        <Link to="about">About</Link>
        <Routes>
          <Route path="about" element={<About />}/>
            <Route path="users" element={<Users />}/>
              <Route path="" element={<Home />}/>
              </Routes>
              </BrowserRouter>
              </div>
          );
} export default App;
