import "../src/app.css";
import "../styles/features_card.css";
const Feature_card = ({ img_link, subtitle }) => {
  return (
    <div className="features_card">
      <img src={img_link} alt="" />
      <p>{subtitle}</p>
      <button
        type="button"
        class="btn active"
        data-bs-toggle="button"
        aria-pressed="true"
      >
        Learn more
      </button>
    </div>
  );
};
export default Feature_card;
