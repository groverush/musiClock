import Clock from "../components/Clock";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useStore } from "../store";
import { makeScale } from "../utils/musicFunctions";
import { drawAScale } from "../utils/polygonsFunctions";
const Home = () => {
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const newMajorScale = makeScale(baseNotes[0], baseAccidental, "major");
	const newPolygonScale = drawAScale("major");
	return (
		<div className="Home">
			<Clock
				polygon={newPolygonScale}
				notesAvailable={newMajorScale}
			/>

			<section className="intro-section">
				<h1>Musiclock</h1>
				<Link className="start-link" to="/learn">
					Click para comenzar
				</Link>
			</section>
		</div>
	);
};
export default Home;
