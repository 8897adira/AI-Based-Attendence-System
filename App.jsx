import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CreateSession from './components/CreateSession';
import AttendanceSessions from './components/AttendanceSessions';

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="container-fluid p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/create-session" element={<CreateSession />} />
            <Route path="/sessions" element={<AttendanceSessions />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
