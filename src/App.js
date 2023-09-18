import cuisine from "./icons/cuisine.png";
import activities from "./icons/activities.png";
import bed from "./icons/bed.png";
import Card from "./components/Card.js";
import "./App.css";
export default function App() {
  return (
    <div className="container">
      <Card
        className="card"
        title="Accommodation"
        icon={bed}
        text="This is where elegance and urban modernity come together. The design combines style, functionality and character. Lie back on your king-size bed with soft Egyptian-cotton sheets and recharge your batteries and freshen up in your Balinese shower."
      />
      <Card
        className="card"
        title="Cuisine"
        icon={cuisine}
        text="At the very centre of London’s West End, Luciano shines with an authentic Italian service and a focus on quality and the source of its ingredients.
        The perfect place to experience something that little bit different."
      />
      <Card
        className="card"
        title="Activities"
        icon={activities}
        text="Keep your body and mind in shape. Visit our boutique gym - opened 24 hours and offers state-of-the-art Peloton and Technogym equipment. A gym offering cardio equipment and different weight machines to keep your body strong."
      />
    </div>
  );
}
