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
              Thank you for visiting. Let’s connect and build something amazing together!
            </p>
          </Col>

          {/* Kolom 3: Media Sosial */}
          <Col lg={3} md={6} className="footer-social">
            <h5 className="footer-title">Follow Me</h5>
            <div className="social-icons d-flex gap-3">
              <a href="https://github.com/dayuani" target="_blank" rel="noreferrer" className="social-link-item" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.instagram.com/dayusantiani._" target="_blank" rel="noreferrer" className="social-link-item" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              {/* <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link-item" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a> */}
              <a href="mailto:dy.santiani@gmail.com" className="social-link-item" title="Email" target="_blank" rel="noreferrer">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>

        </Row>

        {/* Baris Paling Bawah: Hak Cipta */}
        <Row className="copyright-bar text-center mt-5">
          <Col>
            <p className="copyright-text m-0">
              &copy; {new Date().getFullYear()} Dayuani. All Rights Reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponents
