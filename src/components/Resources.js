import React from 'react';
import './Resources.css';
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <div className="resources-container">
      <h2>HR Resources</h2>
      <div className="resource-links">
        <Link to="/resources/policies" className="resource-card">Company Policies</Link>
        <Link to="/resources/benefits" className="resource-card">Benefits</Link>
        <Link to="/resources/payroll" className="resource-card">Payroll Info</Link>
        <Link to="/resources/announcements" className="resource-card">Announcements</Link>
      </div>
    </div>
  );
}

export default Resources;
