import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainMenu from "@/components/management/mainMenu";
import SideBar from "@/components/management/sideBar";
import Header from "@/components/management/header";
import { Container } from "react-bootstrap";
import { ButtonTypeContext } from "@/components/buttonTypeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binar Rent Car",
  description: "Description for your page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body style={{ backgroundColor: "#CFD4ED" }}>
        <Container fluid className="mx-auto p-0 max-width">
          <div className="d-flex max-width">
            <MainMenu />
            <div>
              <Header />
              <div className="d-flex">
                <SideBar />
                {children}
              </div>
            </div>
          </div>
        </Container>
      </body>
    </html>
  );
}
