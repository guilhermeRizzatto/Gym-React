import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Member from './pages/Member';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Home />} />    
        <Route path='/member' element={<Member />} />    
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
