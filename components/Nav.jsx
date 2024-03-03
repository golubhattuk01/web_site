import "../src/app.css";
import "../styles/nav.css";
import { PiDotsThreeCircleVerticalFill } from "react-icons/pi";
const Nav = () => {
  const navItems = ["Products", "Customers", "Pricing", "Resources"];
  const navButton = ["SignIn", "SignUp"];
  return (
    <div className="nav">
      <a href="/#" className="n_left">
        <div className="logo">
          <img
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
            alt="logo"
          />
        </div>
        <h1 className="title">UsabilityHub</h1>
      </a>
      <div className="n_right">
        {navItems.map((currItem) => (
          <a className="nav_link" key={currItem} href="/#">
            {currItem}
          </a>
        ))}

        {navButton.map((currItem) => (
          <a href="/#">
            <button class="btn btn-primary nav_button" type="button">
              {currItem}
            </button>
          </a>
        ))}
      </div>
      <a href="/#" className="options">
        <PiDotsThreeCircleVerticalFill size="8vw" />
      </a>
    </div>
  );
};
export default Nav;

<div class="d-grid gap-2 d-md-block">
  <button class="btn btn-primary" type="button">
    Button
  </button>
  <button class="btn btn-primary" type="button">
    Button
  </button>
</div>;
