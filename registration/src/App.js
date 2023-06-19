 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import About from './components/about';
  import Home from './components/home';
import Contact from'./components/contact';
import Admin from'./components/admin';
import Dashboard from './components/dashboard';
import Manage from './components/manage';
import Resources from './components/resources';
import Services from './components/services';
import Medical from './components/medical';






function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/manage" element={<Manage/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path ="/services" element={<Services/>}/>
          <Route path ="/medical" element={<Medical/>}/>



        </Routes>
      </div>
    </Router>
  );
}

export default App;
