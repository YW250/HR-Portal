import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

function Sidebar() {
  const [visible, setVisible] = useState(true);

  return (
    <div className="bg-light border-end p-3" style={{ minWidth: visible ? "200px" : "0px" }}>
      {visible && (
        <>
          <h5>Menu</h5>
          <ul className="list-unstyled">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contact">Contact</Link></li>
			 <li><Link to="/resources">Resources</Link></li>
          </ul>
        </>
      )}
      <Button variant="outline-secondary" size="sm" onClick={() => setVisible(!visible)}>
        {visible ? "Hide Menu" : "Show Menu"}
      </Button>
    </div>
  );
}

export default Sidebar;
