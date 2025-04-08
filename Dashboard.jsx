import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
  
  const attendanceData = [
    { date: 'Apr 1', present: 45 },
    { date: 'Apr 2', present: 42 },
    { date: 'Apr 3', present: 48 },
    { date: 'Apr 4', present: 47 },
    { date: 'Apr 5', present: 49 },
  ];
  
  function Dashboard() {
    const navigate = useNavigate();
    const [showUpcoming, setShowUpcoming] = useState(false);
    const [showAttendanceEntry, setShowAttendanceEntry] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [students, setStudents] = useState([
        { id: 1, name: "Rohit Sharma", isPresent: true },
        { id: 2, name: "Rahul Mehta", isPresent: false },
        { id: 3, name: "Sneha Patil", isPresent: true },
        { id: 4, name: "Aarav Singh", isPresent: false },
        ]);

    return (
      <div>
        <h2 className="mb-4">Welcome, Professor!</h2>
        <div className="card mb-4" style={{ maxWidth: '500px' }}>
            <div className="row g-0 align-items-center">
                {/* Profile Picture on the Left */}
                <div className="col-auto">
                    <img
                        src="/images/teacherProfilepic.jpg"
                        alt="Profile"
                        className="rounded-circle m-3 border"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                </div>

                {/* Text Content on the Right */}
                <div className="col">
                     <div className="card-body">
                        <h5 className="card-title mb-1">Prof. Chhaya Sharma</h5>
                        <p className="card-text text-muted mb-1">
                            <i className="bi bi-building"></i> Department: Computer Science
                        </p>
                        <p className="card-text mb-1">
                            <i className="bi bi-envelope-fill text-primary"></i> Chhaya@college.edu
                        </p>
                        <p className="card-text mb-3">
                            <i className="bi bi-person-badge-fill text-warning"></i> Class Coordinator
                        </p>

                        <button className="btn btn-outline-primary btn-sm"
                        onClick={() => alert('Edit Profile coming soon!')}>
                        ✏️ Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>



      {/* Quick Actions */}
      <div className="mb-4 d-flex flex-wrap gap-3">
        <button className="btn btn-primary" onClick={() => navigate('/create-session')}>
          ➕ Create Attendance Session
        </button>

        <button className="btn btn-success" onClick={() => alert('Report Download Coming Soon!')}>
          📊 Download Report
        </button>

        <button className="btn btn-info" onClick={() => alert('Student List Page Coming Soon!')}>
          📚 View Students List
        </button>

        <button
        className="btn btn-warning"
        onClick={() => setShowUpcoming(!showUpcoming)}
        >
    📅 {showUpcoming ? "Hide" : "View"} Upcoming Sessions
         </button>
         <button
            className="btn btn-outline-dark"
            onClick={() => setShowAttendanceEntry(!showAttendanceEntry)}
            >
            📝 Mark Attendance Manually
        </button>

        </div>
        
        {showAttendanceEntry && (
            <div className="card mt-4">
                <div className="card-body">
                <h5 className="card-title mb-3">📝 Manual Attendance Entry</h5>

                {/* 🔍 Search Bar */}
                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Search student by name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                {/* 📋 Filtered Student List */}
                {students
                    .filter((student) =>
                    student.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                    .map((student) => (
                    <div
                        key={student.id}
                        className="d-flex justify-content-between align-items-center border-bottom py-2"
                    >
                        <span>{student.name}</span>
                        <div>
                        <span className="me-2">
                            {student.isPresent ? "✅ Present" : "❌ Absent"}
                        </span>
                        <button
                            className={`btn btn-sm ${
                            student.isPresent ? "btn-danger" : "btn-success"
                            }`}
                            onClick={() => {
                            const updated = students.map((s) =>
                                s.id === student.id
                                ? { ...s, isPresent: !s.isPresent }
                                : s
                            );
                            setStudents(updated);
                            }}
                        >
                            Toggle
                        </button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
            )}


        {/* 🔽 Upcoming Sessions Panel - Paste this below the buttons */}
      {showUpcoming && (
        <div className="mt-3">
          <h5 className="mb-3">📅 Upcoming Sessions</h5>
          <div className="row row-cols-1 row-cols-md-2 g-3">

            {/* Session 1 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">AI & Ethics</h6>
                  <p className="card-text mb-1">
                    <i className="bi bi-calendar-event"></i> Apr 10, 2025 – 10:00 AM
                  </p>
                  <p className="card-text mb-1">
                    <i className="bi bi-people-fill"></i> B.Tech CSE - Batch A
                  </p>
                  <p className="card-text">
                    <i className="bi bi-camera-video-fill text-success"></i> Online Session
                  </p>
                  <button className="btn btn-outline-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>

            {/* Session 2 */}
            <div className="col">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h6 className="card-title">Data Structures</h6>
                  <p className="card-text mb-1">
                    <i className="bi bi-calendar-event"></i> Apr 11, 2025 – 9:00 AM
                  </p>
                  <p className="card-text mb-1">
                    <i className="bi bi-people-fill"></i> B.Tech IT - Batch B
                  </p>
                  <p className="card-text">
                    <i className="bi bi-building text-warning"></i> In-person Room 204
                  </p>
                  <button className="btn btn-outline-primary btn-sm">View Details</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

        <br/>
        <div className="row g-4 mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>Total Students</h6>
                <h3>50</h3>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h6>Today's Attendance</h6>
                <h3>45</h3>
              </div>
            </div>
          </div>
        </div>
  
        <div className="card shadow-sm p-3">
          <h5 className="mb-3">Weekly Attendance Report</h5>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={attendanceData}>
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="present" stroke="#007bff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
  
  export default Dashboard;
  