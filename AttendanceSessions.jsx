function AttendanceSessions() {
    const sessions = [
      {
        id: 1,
        className: "MCA - A",
        date: "2025-04-05",
        studentsPresent: 45,
        totalStudents: 50,
      },
      {
        id: 2,
        className: "MCA - B",
        date: "2025-04-04",
        studentsPresent: 42,
        totalStudents: 48,
      },
      {
        id: 3,
        className: "BCA - A",
        date: "2025-04-03",
        studentsPresent: 44,
        totalStudents: 47,
      },
    ];
  
    return (
      <div>
        <h2 className="mb-4">Attendance Sessions</h2>
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Class</th>
              <th>Date</th>
              <th>Present</th>
              <th>Total</th>
              <th>Attendance %</th>
            </tr>
          </thead>
          <tbody>
            {sessions.map((session, index) => (
              <tr key={session.id}>
                <td>{index + 1}</td>
                <td>{session.className}</td>
                <td>{session.date}</td>
                <td>{session.studentsPresent}</td>
                <td>{session.totalStudents}</td>
                <td>
                  {((session.studentsPresent / session.totalStudents) * 100).toFixed(1)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default AttendanceSessions;
  