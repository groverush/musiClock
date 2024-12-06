import Navbar from "../components/Navbar";
import Clock from "../components/Clock";
import { Link } from "react-router-dom";
import "../styles/home.css";
import { useStore } from "../store";
import { makeMajorScale } from "../utils/musicFunctions";
const Home = () => {
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const newMajorScale = makeMajorScale(baseNotes[0], baseAccidental);
	return (
		<div className="Home">
			<Clock
				polygon={`polygon(50% 1%,93.62% 23.61%,	99.67% 47.81%,77.96% 93.09%,21.38% 93.1%,	0.99% 50.8%,8.03% 22.62%)`}
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
