import { Container, Row, Col, Card, Nav } from 'react-bootstrap';
import { achievements } from '../data/index.js';
import React, { useState } from 'react';
const AwardPage = () => {
    // State untuk menyimpan kategori tab yang aktif (default: 'magang')
  const [activeTab, setActiveTab] = useState('magang');

  // Menyaring data berdasarkan kategori yang dipilih pengguna
  const filteredachievements = achievements.filter(item => item.category === activeTab);

  return (
   <section className="awards-section position-relative">
      <div className="bg-glow-dekorasi award-glow-1"></div>
      <div className="bg-glow-dekorasi award-glow-2"></div>

      <Container className="position-relative z-2">
        {/* Header Halaman */}
        <div className="awards-header text-center mb-4">
          <h2 className="section-title">My <span className="text-accent">Journey</span></h2>
          <p className="section-subtitle">
            "An overview of my exploration, contributions, and professional track record established within both industry and academia."
          </p>
        </div>

        {/* --- STRUKTUR NAVIGASI TABS PREMIUM --- */}
        <div className="d-flex justify-content-center mb-5">
          <Nav variant="pills" activeKey={activeTab} onSelect={(selectedKey) => setActiveTab(selectedKey)} className="custom-nav-pills">
            <Nav.Item>
              <Nav.Link eventKey="magang" className="px-4 py-2">
                <i className="bi bi-briefcase me-2"></i>Magang
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="lomba" className="px-4 py-2">
                <i className="bi bi-trophy me-2"></i>Lomba
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="activity" className="px-4 py-2">
                <i className="bi bi-calendar-event me-2"></i>Activity
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>

        {/* Struktur Linimasa / Timeline Grid */}
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="timeline-container">
              
              {filteredachievements.length > 0 ? (
                filteredachievements.map((item) => (
                  <div className="timeline-item animate-fade-in" key={item.id}>
                    {/* Lingkaran Tahun */}
                    <div className="timeline-badge-year">
                      <span>{item.year}</span>
                    </div>

                    {/* Kartu Detail */}
                    <Card className="award-card">
                      <Card.Body className="p-4">
                        <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-3 mb-3">
                          <div className="d-flex align-items-center gap-3">
                            <div className="award-icon-box">
                              <i className={item.icon}></i>
                            </div>
                            <div>
                              <Card.Title className="award-card-title m-0">{item.title}</Card.Title>
                              <span className="award-institution">{item.institution}</span>
                            </div>
                          </div>
                          <span className="rank-badge">{item.rank}</span>
                        </div>
                        
                        <Card.Text className="award-card-desc mb-4">
                          {item.desc}
                        </Card.Text>

                        {/* Image Gallery */}
                        {item.images && item.images.length > 0 && (
                          <div className="award-image-gallery mt-3">
                            <Row className="g-3">
                              {item.images.map((image) => (
                                <Col key={image.id} xs={12} sm={6}>
                                  <div className="award-img-wrapper">
                                    <img 
                                      src={image.url} 
                                      alt={image.alt} 
                                      className="img-fluid rounded-3" 
                                    />
                                  </div>
                                </Col>
                              ))}
                            </Row>
                          </div>
                        )}
                        
                      </Card.Body>
                    </Card>
                  </div>
                ))
              ) : (
                // Tampilan jika data kategori tersebut masih kosong
                <div className="text-center text-muted py-5 card-empty-state">
                  <i className="bi bi-inbox fs-2 d-block mb-2 text-accent"></i>
                  Belum ada data untuk kategori ini.
                </div>
              )}

            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default AwardPage
