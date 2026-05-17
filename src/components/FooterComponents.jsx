import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponents = () => {
    const currentYear = new Date().getFullYear();
  return (
   <footer className="custom-footer position-relative">
      {/* Efek Garis Glow Atas Semacam Pembatas Modern */}
      <div className="footer-top-glow"></div>

      <Container className="position-relative z-2">
        <Row className="gy-4">
          
          {/* Kolom 1: Tentang Singkat */}
          <Col lg={5} md={12}>
            <div className="footer-brand mb-3">
              Dayuani<span className="text-accent">.</span>
            </div>
            <p className="footer-about-text">
              Terima kasih telah berkunjung. Mari terhubung dan bangun sesuatu yang luar biasa bersama-sama!
            </p>
          </Col>

          {/* Kolom 2: Navigasi Cepat */}
          <Col lg={4} md={6} className="footer-links">
            <h5 className="footer-title">Tautan Pintas</h5>
            <ul className="list-unstyled p-0 m-0">
              <li><Link to="/"><i className="bi bi-chevron-right me-2 font-xs"></i>Home</Link></li>
              <li><Link to="/projects"><i className="bi bi-chevron-right me-2 font-xs"></i>Project</Link></li>
              <li><Link to="/about"><i className="bi bi-chevron-right me-2 font-xs"></i>Tentang Saya</Link></li>
              <li><Link to="/contact"><i className="bi bi-chevron-right me-2 font-xs"></i>Kontak</Link></li>
            </ul>
          </Col>

          {/* Kolom 3: Media Sosial */}
          <Col lg={3} md={6} className="footer-social">
            <h5 className="footer-title">Ikuti Saya</h5>
            <div className="social-icons d-flex gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon-link">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon-link">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-link">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </Col>

        </Row>

        {/* Baris Paling Bawah: Hak Cipta */}
        <Row className="copyright-bar text-center mt-5">
          <Col>
            <p className="copyright-text m-0">
              &copy; {new Date().getFullYear()} Dayuani Putri. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponents
