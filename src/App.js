import './App.css';
import './pages/Member/Member.css';
import './pages/Universal/ListBar.css';
import './pages/Universal/RefreshButton.css';
import './pages/Trainer/TrainerComplete.css';
import './pages/Trainer/Trainer.css';
import './pages/Trainer/ListTrainerComplete.css';
import './pages/WorkLoad/WorkLoad.css';

import { BrowserRouter as Router, Routes, Route, Navigate }
    from 'react-router-dom';
    
import Member from './pages/Member/Member';
import Registration from './pages/Registration/Registration';
import Trainer from './pages/Trainer/Trainer';
import TrainerComplete from './pages/Trainer/TrainerComplete';
import WorkLoad from './pages/WorkLoad/WorkLoad';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' element={<Navigate to="/member" />} />    
        <Route path='/member' element={<Member />} />    
        <Route path='/registrations' element={<Registration />} />
        <Route path='/trainers' element={<Trainer />} />
        <Route path='/trainersComplete' element={<TrainerComplete />} />
        <Route path='/workLoads' element={<WorkLoad />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
