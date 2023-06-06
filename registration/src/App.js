 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import About from './components/about';
import Home from './components/home';
import Event from'./components/events';
import Contact from'./components/contact';
import Result from'./components/result';
import Admin from'./components/admin';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
          <Route path="/events" element={<Event/>} />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/result" element={<Result/>} />
          <Route path="/admin" element={<Admin/>}/>


        </Routes>
      </div>
    </Router>
  );
}

export default App;
