 
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/registrationForm';
import Header from './components/header';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path='/header' element={<Header/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
