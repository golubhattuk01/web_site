import "../src/app.css";
import "../styles/features.css";
import Feature_card from "./Feature_card";

const Features = () => {
  function getRandomKeyCode(min, max) {
    // Ensure the min and max values are integers
    min = Math.ceil(min);
    max = Math.floor(max);
    // Generate and return a random number within the specified range, inclusive
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  const feature_card_items = [
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
    {
      img_link:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmm7MtvXtAMwYLlODmZRObaWgdOAkAT3XauQ&usqp=CAU",
      subtitle: "hello mere dost",
    },
  ];
  return (
    <div className="features">
      <div className="upper">
        <h1>Your user research Swiss Army knife</h1>
        <button
          type="button"
          class="btn active"
          data-bs-toggle="button"
          aria-pressed="true"
        >
          See all features
        </button>
      </div>
      <div className="lower">
        {feature_card_items.map((i) => (
          <Feature_card
            img_link={i.img_link}
            subtitle={i.subtitle}
          ></Feature_card>
        ))}
      </div>
    </div>
  );
};
export default Features;
