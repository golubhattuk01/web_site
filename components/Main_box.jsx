import "../styles/main_box.css";
import "../src/app.css";
const Main_box = (props) => {
  return <div className="main_box">{props.children}</div>;
};
export default Main_box;
