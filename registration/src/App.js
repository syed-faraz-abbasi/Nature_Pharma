 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registrationForm';
import Header from './components/header';
import About from './components/about';
import Home from './components/home';
import Event from'./components/events';
import Contact from'./components/contact';
import Result from'./components/result';


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


        </Routes>
      </div>
    </Router>
  );
}

export default App;
