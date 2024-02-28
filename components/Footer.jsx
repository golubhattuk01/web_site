import "../src/app.css";
import "../styles/footer.css";

const Footer = () => {
  const product = [
    "Overview",
    "Pricing",
    "UsabilityHub panel",
    "Customers",
    "Statsu page",
  ];
  const methodology = [
    "Overview",
    "Pricing",
    "UsabilityHub panel",
    "Customers",
    "Statsu page",
  ];
  const Resources = [
    "Overview",
    "Pricing",
    "UsabilityHub panel",
    "Customers",
    "Statsu page",
  ];
  return (
    <div className="footer">
      <div className="left_x">
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884_1280.png"
            alt="logo"
          />
        </div>
        <h3>UsabilityHub</h3>
      </div>
      <div className="product">
        <h2>Product</h2>
        {product.map((item) => (
          <a href="/#">{item}</a>
        ))}
      </div>
      <div className="methodology">
        <h2>Methodology</h2>
        {methodology.map((item) => (
          <a href="/#">{item}</a>
        ))}
      </div>
      <div className="resources">
        <h2>Resources</h2>
        {Resources.map((item) => (
          <a href="/#">{item}</a>
        ))}
      </div>
    </div>
  );
};
export default Footer;
