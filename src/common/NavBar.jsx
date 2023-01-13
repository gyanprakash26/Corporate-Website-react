import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
import logo from "./inextLogo.svg"
import './NavBar.css'
function NavBar() {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar" >
          <Container fluid>
            <div>
              <img src={logo} alt="logo"></img>
            </div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton className='iconName'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={logo} alt="logo"></img>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="iconMenu">
                    <ul>                      
                      <li className='iconName'><NavLink to="/" href="#Home" className='iconName' >Home</NavLink></li>
                      <div class="dropdown">
                        <li className='service iconName'>Services</li>
                        <div class="dropdown-content">
                          <div className="dropdown-menu">
                            <div className='drop-detail'>
                              <h4>Services</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, saepe?</p>
                            </div>
                          </div>
                          <div className="drop-list">
                            <ul>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                            </ul> 
                            <div className="drop-list">
                              <ul>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                              <li>Services</li>
                            </ul>
                            </div>
                            
                          </div>
                          
                        </div>
                      </div>
                      <div className='d-service'>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                      </div>
                      <li className='iconName'>About</li>
                      <li className='iconName'>Blog</li>
                      <li className='iconName'>Portfolio</li>
                      <li className='iconName'>Testimonial</li>
                      <li className='iconName'><NavLink to="/contact" href="#contact" className='iconName'>Contact us</NavLink></li>
                    </ul>
                  </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
export default NavBar;