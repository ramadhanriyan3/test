import { Container, Row } from "react-bootstrap";
import WhyCard from "./whyCard";

function WhyUs() {
  return (
    <>
      <Container data-testid="whyUs" className="mt-100" id="whyUs">
        <h2 className="heading-bold mb-3">Why Us?</h2>
        <p className="body-light pb-4">Mengapa harus pilih Binar Car Rental</p>
        <Row className="justify-content-xl-between justify-content-evenly m-0 row-gap-3">
          <WhyCard
            imgPath="/icon_complete.png"
            val1="Mobil Lengkap"
            val2="Tersedia banyak pilihan mobil,
                  kondisi masih baru, bersih dan terawat"
          />
          <WhyCard
            imgPath="/icon_price.png"
            val1="Harga Murah"
            val2="Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain"
          />
          <WhyCard
            imgPath="/icon_24hrs.png"
            val1="Layanan 24 Jam"
            val2="Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu"
          />
          <WhyCard
            imgPath="/icon_professional.png"
            val1="Sopir Profesional"
            val2="Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu"
          />
        </Row>
      </Container>
    </>
  );
}

export default WhyUs;
