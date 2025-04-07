import { Container, Col, Row } from "react-bootstrap";
// import { FaShoppingCart, FaUser } from "react-icons/fa";
// import { BsTwitterX } from "react-icons/bs";
// import { BiLogoFacebook } from "react-icons/bi";
// import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import Marquee from "./Marquee";


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <h2>Our House</h2>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <p>Church &copy; {currentYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
