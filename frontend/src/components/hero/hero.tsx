"use client";
import { Container, Row, Col, Image } from "react-bootstrap";
import React from "react";

interface HeroProps {
  children: React.ReactNode;
}

function Hero({ children }: HeroProps) {
  return (
    <>
      <Container data-testid="hero" className="main-bg px-0 max-width pt-37">
        <Row className="row-gap-4  me-0 mx-md-0">
          <Col
            lg={5}
            className="align-self-center ps-md-0 px-0 ps-3 offset-lg-1"
          >
            <h1 className="big-header">
              Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="body-light hero-p mt-2">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            {children}
          </Col>
          <Col lg={6} className="px-0 ps-lg-3 ">
            <Image
              src="/img_car.png"
              alt="car"
              className="img-fluid float-end"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Hero;
