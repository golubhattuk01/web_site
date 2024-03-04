import "../src/app.css";
import "../styles/header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="h_left">
        <h1>Design confidently</h1>
        <h3>
          Usability is a remote use research platform that takes the guesswork
          out of design decisions by valiating them with real users
        </h3>
        <button type="button" className="my_btn">
          Get Started
        </button>
      </div>
      <div className="h_right">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkeiukhvsuxM7OV0cdgvgjMsr8eBzdzYTBDw&usqp=CAUs" />
      </div>
    </div>
  );
};
export default Header;
