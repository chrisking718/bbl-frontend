import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import './App.css';

import NavBar from './Components/NavBar'

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Show from './Pages/Show'
import New from "./Pages/New";


function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/sites" element={<Index />} />
            <Route path="/sites/:id" element={<Show />} />
            <Route path="/sites/new" element={<New/>} />
            {/* <Route path="/" element={} />
            <Route path="/" element={} /> */}
          </Routes>
        </main>
     </Router>
    </div>
  );
}

export default App;
