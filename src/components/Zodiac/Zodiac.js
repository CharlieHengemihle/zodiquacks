import './Zodiac.css';

export default function Zodiac(props) {
  return (
    <div className="zodiac">
      <img alt={props.symbol} src={`${process.env.PUBLIC_URL}/signs/${props.symbol}.png`} />
      <span className="name">{props.name}</span>
      <span className="dates">{props.dates}</span>
    </div>
  );
}
