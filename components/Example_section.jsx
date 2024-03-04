import "../src/app.css";
import "../styles/example_section.css";
import Example_card from "./Example_card";

const Example_section = () => {
  const example_card_array = [
    "cardOne1",
    "cardTwo1",
    "cardThree1",
    "cardFour1",
    "cardOne2",
    "cardTwo2",
  ];
  return (
    <div className="example_section">
      <div className="upper_box">
        <h1>One platform , endless possibilities</h1>
        <button
          type="button"
          class="my_btn"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          See more examples
        </button>
      </div>
      <div className="lower_box">
        {example_card_array.map((item) => (
          <Example_card example_text={item}></Example_card>
        ))}
      </div>
    </div>
  );
};
export default Example_section;
