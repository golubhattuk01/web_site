import Container from "../components/Container";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Top_banner from "../components/Top_banner";
import Companies_section from "../components/Companies_section";

import "./app.css";
import Features from "../components/Features_section";
import Big_feature_section1 from "../components/Big_feature_section1";
import Big_feature_section2 from "../components/Big_feature_section2";
import Big_feature_section3 from "../components/Big_feature_section3";
import Example_section from "../components/Example_section";
import Cta from "../components/Cta-section";
import Footer from "../components/Footer";
import Sub_footer from "../components/Sub_footer";

// import Mycolor from "../store";
export function App() {
  return (
    <>
      <Top_banner></Top_banner>
      <Container>
        <Nav></Nav>
        <Header></Header>
        <Companies_section></Companies_section>
        <Features></Features>
        <Big_feature_section1></Big_feature_section1>
        <Big_feature_section2></Big_feature_section2>
        <Big_feature_section3></Big_feature_section3>
        <Example_section></Example_section>
        <Cta></Cta>
        <Footer></Footer>
      </Container>
      <Sub_footer></Sub_footer>
    </>
  );
}
