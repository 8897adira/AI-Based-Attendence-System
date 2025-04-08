import { useState } from 'react';

function CreateSession() {
  const [className, setClassName] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Attendance link generated for ${className} on ${date}`);
  };

  return (
    <div>
      <h2 className="mb-4">Create Attendance Session</h2>
      <form onSubmit={handleSubmit} className="w-50">
        <div className="mb-3">
          <label className="form-label">Class Name</label>
          <input
            type="text"
            className="form-control"
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Generate Link</button>
      </form>
    </div>
  );
}

export default CreateSession;
