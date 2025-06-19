import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomePage from './components/HomePage';
import Sidebar from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Gallery from './components/Gallery';
import News from './components/News';
import Contacts from './components/Contacts';
import Slider from './components/Slider';
import Resources from './components/Resources';
import ResourcePolicies from './components/ResourcePolicies';
import ResourceBenefits from './components/ResourceBenefits';
import ResourcePayroll from './components/ResourcePayroll';
import ResourceNews from './components/ResourceNews';


function App() {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundImage: 'url(/assets/site-bg.jpg)', backgroundSize: 'cover' }}>
      <Header />
      <div className="container-fluid flex-grow-1">
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>
          <div className="col-md-10">
            <Slider />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<News />} />
              <Route path="/contact" element={<Contacts />} />
			  <Route path ="/resources" element={<Resources />} />
			  <Route path="/resources" element={<Resources />} />
			  <Route path="/resources/policies" element={<ResourcePolicies />} />
			  <Route path="/resources/benefits" element={<ResourceBenefits />} />
			  <Route path="/resources/payroll" element={<ResourcePayroll />} />
			  <Route path="/resources/announcements" element={<ResourceNews />} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
