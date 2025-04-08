import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3" style={{ minHeight: '100vh', width: '250px' }}>
      <h4 className="text-center">Teacher Panel</h4>
      <ul className="nav flex-column mt-4">
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/">🏠 Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/create-session">➕ Create Session</Link>
        </li>
        <li className="nav-item mb-2">
          <Link className="nav-link text-white" to="/sessions">📂 Attendance Sessions</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
