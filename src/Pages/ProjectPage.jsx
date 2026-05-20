import { Container, Row, Col, Card } from 'react-bootstrap';
import { projects } from '../data/index.js';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
  return (
   <div className="project-section">
      <Container>
        {/* Header Bagian Proyek */}
        <div className="project-header text-center mb-5">
          <h2 className="section-title">My <span className="text-accent">Projects</span></h2>
          <p>A showcase of my projects, crafted with precision and deep dedication</p>
        </div>

        {/* Bagian Grid Cards */}
        <Row className="g-4">
          {projects.map((project) => (
            <Col md={6} lg={4} key={project.id}>
              <Card className="custom-project-card h-100">
                
                {/* Pembungkus Gambar untuk Efek Hover Zoom */}
                <div className="img-wrapper">
                  <Card.Img variant="top" src={project.image} alt={project.title} />
                </div>
              
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="project-card-title">{project.title}</Card.Title>
                  
                  {/* Deskripsi Proyek */}
                  <Card.Text className="project-card-desc flex-grow-1">
                    {project.desc}
                  </Card.Text>
                  
                  {/* PERBAIKAN TECH: Melakukan looping array teknologi */}
                  <div className="project-card-tech d-flex flex-wrap gap-2 mb-4">
                    {project.tech.map((techName, index) => (
                      <span key={index} className="tech-badge">{techName}</span>
                    ))}
                  </div>
                  
                  {/* PERBAIKAN LINK: Mengarah ke link proyek masing-masing secara dinamis */}
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="project-card-link mt-auto"
                  >
                    Lihat Project <i className="bi bi-arrow-right ms-1"></i>
                  </a>
                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ProjectPage
