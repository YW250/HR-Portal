import React from 'react';
import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="px-3 mb-3" style={{ backgroundImage: 'url(/assets/header-bg.jpg)', backgroundSize: 'cover' }}>
      <Navbar.Brand href="/">
        <img src="/assets/logo.png" alt="Logo" width="40" height="40" className="d-inline-block align-top me-2" />
        HR Department Portal
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;
