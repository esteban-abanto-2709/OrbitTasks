import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="mt-auto py-3 bg-dark text-white">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={4} className="text-center text-md-start">
            <h5>OrbitTasks</h5>
            <p className="mb-0">Gestiona tus tareas de manera eficiente</p>
          </Col>
          
          <Col md={4} className="text-center my-3 my-md-0">
            <p className="mb-1">Desarrollado por:</p>
            <p className="mb-0">Esteban Abanto Garcia</p>
            <a href="mailto:esteban.abanto.2709@gmail.com" className="text-white">
              esteban.abanto.2709@gmail.com
            </a>
          </Col>
          
          <Col md={4} className="text-center text-md-end">
            <p className="mb-0">&copy; {currentYear} OrbitTasks</p>
            <p className="mb-0">Todos los derechos reservados</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;