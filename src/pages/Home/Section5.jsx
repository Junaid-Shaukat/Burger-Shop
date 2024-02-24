import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import StoreIOS from "../../assets/shop/appstore.png"
import StoreGoogle from "../../assets/shop/googleplay.png";
import Download from "../../assets/shop/e-shop.png";

const Section5 = () => {
  return (
    <section className="shop_section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
            <h4>Download mobile App and</h4>
            <h2 className="discount">save up to 20%</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt cumque dignissimos emo.</p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/">
                <img src={StoreIOS} alt="IOS" className="img-fluid p-2 me-3" />
              </Link>
              <Link to="/">
                <img src={StoreGoogle} alt="Android" className="img-fluid p-2 store me-3" />
              </Link>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <img src={Download} alt="e-shop" className="img-fluid e-shop-img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section5;
