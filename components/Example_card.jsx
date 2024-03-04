import "../src/app.css";
import "../styles/example_card.css";
const Example_card = ({ example_text }) => {
  return (
    <a className="example_card" key={example_text} href="/#">
      {example_text}
    </a>
  );
};
export default Example_card;
