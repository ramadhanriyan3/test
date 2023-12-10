import { Container, Row, Col, Image } from "react-bootstrap";

function Footer() {
  return (
    <>
      <Container fluid="lg" className="p-0 mt-100 mb-100">
        <Row className="mx-3 justify-content-start gap-5">
          <Col sm={3} className="p-0">
            <p className="body-light">
              Jalan Suroyo No. 161 Mayangan Kota
              <br /> Probolonggo 672000
            </p>
            <p className="body-light">binarcarrental@gmail.com</p>
            <p className="body-light mb-0">081-233-334-808</p>
          </Col>
          <Col sm={1} className="p-0">
            <p className="body-regular">Our Service</p>
            <p className="body-regular">Why us</p>
            <p className="body-regular">Testimoial</p>
            <p className="body-regular mb-0">FAQ</p>
          </Col>
          <Col sm={3} className="p-0">
            <p className="body-light">Conect with us</p>
            <div className="d-flex flex-wrap" />
            <Image className="p-2" src="/icon_facebook.png" alt="facebook" />
            <Image className="p-2" src="/icon_instagram.png" alt="instagram" />
            <Image className="p-2" src="/icon_twitter.png" alt="icon_twitter" />
            <Image className="p-2" src="/icon_mail.png" alt="mail" />
            <Image className="p-2" src="/icon_twitch.png" alt="twitch" />
            <div />
          </Col>
          <Col sm={3} className="p-0">
            <p className="body-light">Copyright Binar 2022</p>
            <Image src="https://i.ibb.co/mDD1YMy/logo.png" alt="Logo" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
