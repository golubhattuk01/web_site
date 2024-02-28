import "../src/app.css";
import "../styles/example_card.css";
const Example_card = ({ example_text }) => {
  return (
    <a className="example_card" key={example_text} href="/#">
      <h3>{example_text}</h3>
    </a>
  );
};
export default Example_card;
