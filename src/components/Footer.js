import { Col, Row } from "react-bootstrap";
import Logo from "../Fanconvo-header-logo.png";

const Footer = () => {
  return (
    <>
      <Row>
        <Col xs={3} sm={3}>
          <img width="170" src={Logo} className="py-4" alt="" />
        </Col>
        <Col
          xs={7}
          sm={7}
          className="py-4 text-dark d-flex flex-row justify-content-around"
        >
          <p className="pl-1">How Fanconvo Works ?</p>
          <p className="pl-1">Terms Of Use</p>
          <p className="pl-1">Contact Us</p>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center py-2 text-dark">
          <p> &copy; 2021 Fanconvo</p>
        </Col>
      </Row>
    </>
  );
};
export default Footer;
