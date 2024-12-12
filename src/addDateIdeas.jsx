import React, { useState } from 'react';

const AddDateIdeas = () => {
  const [dateIdea, setDateIdea] = useState('');
  const [ideas, setIdeas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dateIdea.trim()) {
      setIdeas([...ideas, dateIdea]);
      setDateIdea('');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Share Your Fun Date Ideas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="dateIdea" className="form-label">
            Date Idea:
          </label>
          <input
            type="text"
            id="dateIdea"
            className="form-control"
            value={dateIdea}
            onChange={(e) => setDateIdea(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <h3>Submitted Date Ideas</h3>
        <ul className="list-group">
          {ideas.map((idea, index) => (
            <li key={index} className="list-group-item">
              {idea}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddDateIdeas;
