import "../styles/inner_box.css";
import "../src/app.css";
const Inner_Box = (props) => {
  return <div className="inner_box">{props.children}</div>;
};
export default Inner_Box;
