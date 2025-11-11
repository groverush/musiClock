
import "../../../styles/cards/interval-card.css";
const IntevalCard = ({interval}) => {
    return <div key={interval.name} className="interval-card">
							<h3>{interval.intervalName}</h3>
							<h4>{interval.intervalNotes}</h4>
							
							<p>{interval.desc}</p>
						</div>
}

export default IntevalCard;