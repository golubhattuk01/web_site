import "./app.css";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Top_banner from "../components/Top_banner";
import Companies_section from "../components/Companies_section";
import Features from "../components/Features_section";
import Big_feature_section1 from "../components/Big_feature_section1";
import Big_feature_section2 from "../components/Big_feature_section2";
import Big_feature_section3 from "../components/Big_feature_section3";
import Example_section from "../components/Example_section";
import Cta from "../components/Cta-section";
import Footer from "../components/Footer";
import Sub_footer from "../components/Sub_footer";
import Main_box from "../components/Main_box";
import Inner_Box from "../components/Inner_Box";

// import Mycolor from "../store";
export function App() {
  return (
    <Main_box>
      <Top_banner></Top_banner>
      <Inner_Box>
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
      </Inner_Box>
      <Sub_footer></Sub_footer>
    </Main_box>
  );
}
