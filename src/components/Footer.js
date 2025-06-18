import React from 'react';
import './Footer.css';

function Footer() {
  const footerStyle = {
    backgroundImage: "url('/assets/footer-bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: '#000',
  };
  return (
    <footer className="footer mt-auto py-4 border-top" style={footerStyle}>
      <div className="footer-overlay py-4">
		<div className="container">
			<div className="row justify-content-center mx-auto" style={{ maxWidth: '1000px' }}>
			  <div className="col-md-4 mb-3">
				<h6>Contact</h6>
				<p className="mb-1"><i className="bi bi-envelope"></i> hr-dept@uuou.edu</p>
				<p className="mb-1"><i className="bi bi-telephone"></i> +123 421 100</p>
				<p className="mb-1"><i className="bi bi-geo-alt"></i> 694 Uni street, 20</p>
			  </div>
			  <div className="col-md-4 mb-3 text-center">
				<h5>Human Resources Department</h5>
				<p>Universal University of Universe</p>
				<p className="text-muted small">© 2025 UUoU HR</p>
			  </div>

			  <div className="col-md-4 mb-3 ms-auto text-md-end text-center">
				<h6>Quick Links</h6>
				<ul className="list-unstyled">
				  <li><a href="/" className="text-decoration-none text-muted">About</a></li>
				  <li><a href="/news" className="text-decoration-none text-muted">News</a></li>
				  <li><a href="/gallery" className="text-decoration-none text-muted">Gallery</a></li>
				  <li><a href="/contact" className="text-decoration-none text-muted">Contact</a></li>
				</ul>
			  </div>
			</div>

			<div className="text-center mt-3">
			  <a href="https://facebook.com" className="text-muted mx-2"><i className="bi bi-facebook"></i></a>
			  <a href="https://linkedin.com" className="text-muted mx-2"><i className="bi bi-linkedin"></i></a>
			  <a href="https://mail.google.com" className="text-muted mx-2"><i className="bi bi-envelope"></i></a>
			</div>
		</div>
      </div>
    </footer>
  );
}

export default Footer;