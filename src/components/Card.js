import "./Card.css";
function Card(props) {
  //props - icon, title, text
  //every card gets a learn more button
  return (
    <div className={`${props.title} card`}>
      <img className="icon" src={props.icon} alt="icon" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
      <button id="learnMore">Learn More</button>
    </div>
  );
}
export default Card;
