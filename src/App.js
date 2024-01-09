import './App.css';
import './pages/Member/Member.css';
import './pages/Universal/ListBar.css';
import './pages/Universal/RefreshButton.css';
import { BrowserRouter as Router, Routes, Route, Navigate }
    from 'react-router-dom';
import Member from './pages/Member/Member';
import Registration from './pages/Registration/Registration';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/member" />} />    
        <Route path='/member' element={<Member />} />    
        <Route path='/registrations' element={<Registration />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
