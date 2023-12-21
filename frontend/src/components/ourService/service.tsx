import { Row, Col, Container, Image } from "react-bootstrap";
import ServiceItem from "./serviceItem";

function OurService() {
  return (
    <Container data-testid="ourService" className="mt-100" id="ourService">
      <Row className="justify-content-center">
        <Col className="col-10 col-sm-5 offset-md-1 px-auto">
          <Image fluid src="/img_service.png" alt="service" />
        </Col>
        <Col sm={5}>
          <h2 className="heading-bold mb-0">
            Best Car Rental for any kind of trip in (Lokasimu)!
          </h2>
          <p className="body-light pt-3">
            Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
            lebih murah dibandingkan yang lain, kondisi mobil baru, serta
            kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
            meeting, dll.
          </p>
          <div>
            <ServiceItem value={"Sewa Mobil Dengan Supir di Bali 12 Jam"} />
            <ServiceItem value={"Sewa Mobil Lepas Kunci di Bali 24 Jam"} />
            <ServiceItem value={"Sewa Mobil Jangka Panjang Bulanan"} />
            <ServiceItem value={"Gratis Antar - Jemput Mobil di Bandara"} />
            <ServiceItem value={"Layanan Airport Transfer / Drop In Out"} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default OurService;
