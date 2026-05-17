
import { Container, Row, Col, Card,Form, Button } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import MyPhoto from '../assets/img/myphoto.jpeg';
import { projects } from '../data/index.js';
import { skillCategories } from '../data/index.js';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
const HomePage = () => {
  return (
    <div className="">
     <section className="home-section position-relative">
      
      {/* Elemen Dekorasi Latar Belakang (Mesh Glow) */}
      <div className="bg-glow-dekorasi top-left"></div>
      <div className="bg-glow-dekorasi bottom-right"></div>

      <Container className="position-relative z-2">
        <Row className="align-items-center min-vh-80">
          
          {/* KOLOM KIRI: Teks Perkenalan */}
          <Col lg={7} md={12} className="home-intro text-center text-lg-start mb-5 mb-lg-0">
            <div className="badge-welcome mb-3">
              <span className="dot"></span> Halo, Saya
            </div>
            
            <h1 className="hero-name">
              Dayu <span className="text-accent">Santiani</span>
            </h1>
            
            <div className="job-title-wrapper">
              <h2 className="job-title">Frontend Developer</h2>
              <span className="separator">|</span>
              <h2 className="job-title-sub">React Specialist</h2>
            </div>
            
            <p className="hero-description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor natus minima repellendus alias ratione obcaecati commodi veniam ad incidunt nemo!
            </p>
            
            {/* Tombol Aksi */}
            <div className="d-flex gap-3 justify-content-center justify-content-lg-start pt-2">
              <Button as={Link} to="/projects" className="btn-custom-connect btn-lg-premium">
                Lihat Project Saya <i className="bi bi-arrow-right ms-2"></i>
              </Button>
              
              <Button as={Link} to="/about" className="btn-outline-custom btn-lg-premium">
                Tentang Saya
              </Button>
            </div>

            {/* --- TAMBAHAN BARU: Ikon Media Sosial di Bawah Tombol --- */}
            <div className="hero-socials d-flex gap-3 justify-content-center justify-content-lg-start mt-4 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link-item" title="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-link-item" title="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-link-item" title="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="mailto:emailmu@domain.com" className="social-link-item" title="Email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </div>
          </Col>

          {/* KOLOM KANAN: Foto Profil */}
          <Col lg={5} md={12} className="text-center">
            <div className="profile-img-box">
              <img 
                src={MyPhoto}
                alt="Dayuani Putri - Frontend Developer" 
                className="profile-img img-fluid" 
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>

    <section className="home-skills-section py-5">
      <Container>
        {/* Header Seksi */}
        <div className="skills-header text-center mb-5">
          <h2 className="section-title">My <span className="text-accent">Skills</span></h2>
          <p className="section-subtitle">
            Teknologi, framework, dan perangkat desain yang saya kuasai untuk membangun solusi digital yang optimal.
          </p>
        </div>

        {/* Loop Kategori Skill */}
        <Row className="justify-content-center">
          <Col lg={10}>
            {skillCategories.map((category) => (
              <div key={category.id} className="skill-group-wrapper mb-4">
                <h3 className="skill-group-title mb-3">{category.title}</h3>
                
                <div className="d-flex flex-wrap gap-3">
                  {category.items.map((skill, index) => (
                    <div 
                      key={index} 
                      className="custom-tech-badge d-flex align-items-center gap-2"
                      style={{ 
                        backgroundColor: skill.bg, 
                        color: skill.color || '#ffffff' 
                      }}
                    >
                      <i className={skill.icon}></i>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>

     <section className="contact-section position-relative">
        {/* Efek Lampu Latar Belakang */}
        <div className="bg-glow-dekorasi contact-glow"></div>

        <Container className="position-relative z-2">
          <Row className="justify-content-center">
            <Col lg={8} md={10}>
              
              {/* Header Section */}
              <div className="contact-header text-center mb-5">
                <h2 className="section-title">Get In <span className="text-accent">Touch</span></h2>
                <p className="section-subtitle">
                  Ingin berdiskusi tentang proyek, kolaborasi, atau sekadar menyapa? 
                  Silakan isi formulir di bawah ini.
                </p>
              </div>

              {/* Desain Baru Form Card Premium */}
              <div className="contact-card-wrapper">
                <Form className="premium-form">
                  <Row>
                    {/* Input Nama */}
                    <Col md={6} className="mb-4">
                      <Form.Group controlId="formNama">
                        <Form.Label className="custom-label">Nama Lengkap</Form.Label>
                        <Form.Control 
                          type="text" 
                          placeholder="Masukkan nama Anda" 
                          className="custom-input"
                          required 
                        />
                      </Form.Group>
                    </Col>

                    {/* Input Email */}
                    <Col md={6} className="mb-4">
                      <Form.Group controlId="formEmail">
                        <Form.Label className="custom-label">Alamat E-mail</Form.Label>
                        <Form.Control 
                          type="email" 
                          placeholder="nama@email.com" 
                          className="custom-input"
                          required 
                        />
                      </Form.Group>
                    </Col>

                    {/* Input Pesan */}
                    <Col md={12} className="mb-4">
                      <Form.Group controlId="formPesan">
                        <Form.Label className="custom-label">Pesan Anda</Form.Label>
                        <Form.Control 
                          as="textarea" 
                          rows={5} 
                          placeholder="Tuliskan pesan atau penawaran kerja sama Anda di sini..." 
                          className="custom-input"
                          required 
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Tombol Kirim Premium */}
                  <div className="text-center pt-2">
                    <Button type="submit" className="btn-custom-connect btn-lg-premium w-100 w-md-auto px-5">
                      Kirim Pesan <i className="bi bi-send-fill ms-2"></i>
                    </Button>
                  </div>
                </Form>
              </div>

            </Col>
          </Row>
        </Container>
      </section>
    </div>

  )
}

export default HomePage
