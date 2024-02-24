import { Col, Container, Row } from "react-bootstrap"
import Heroimg from "../../assets/hero/hero-2.png"
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="hero_section">
        <Container>
            <Row>
                <Col lg={5} className="mb-5 mb-lg-0">
                    <div className="position-relative">
                        <img src={Heroimg} className="img-fluid" alt="hero" />
                        <div className="price_badge">
                            <div className="badge_text">
                                <h4 className="h4_xs">Only</h4>
                                <h4 className="h3_lg">$5.99</h4>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="hero_text text-center">
                        <h1 className="text-white">New Burger</h1>
                        <h2 className="text-white">With Onion</h2>
                       <p className="text-white pt-2 pb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud excupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                       <Link to="/" className="btn order_now">
                        Order Now
                    </Link>
                   
                    </div>

                  
                </Col>
        
            </Row>
        </Container>
    </section>
  )
}

export default HeroSection