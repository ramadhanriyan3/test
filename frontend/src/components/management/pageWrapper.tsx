"use client";
import { Container } from "react-bootstrap";
import { ButtonTypeContext } from "../buttonTypeContext";

interface WraperProp {
  children: React.ReactNode;
  buttonType: any;
}
export default function PageWraper({ children, buttonType }: WraperProp) {
  return (
    <>
      <Container fluid className="p-4">
        <ButtonTypeContext.Provider value={buttonType}>
          {children}
        </ButtonTypeContext.Provider>
      </Container>
    </>
  );
}
