import { Container } from "react-bootstrap";
import CardCar from "./cardCar";
import { css, cx } from "@emotion/css";

const cardsContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

interface CardCarProps {
  filteredData: any[];
}

function CarsWrapper({ filteredData }: CardCarProps) {
  return (
    <Container className="mx-auto">
      <div className={cx(cardsContainer)}>
        {filteredData?.length ? (
          filteredData.map((item: any) => (
            <CardCar
              id={item.id}
              key={item.id}
              imagePath={item.image}
              model={item.model}
              price={item.rentPerDay}
              capacity={item.capacity}
              transmission={item.transmission}
              year={item.year}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </Container>
  );
}

export default CarsWrapper;
