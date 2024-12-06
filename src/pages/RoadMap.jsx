import { Topics } from "../components/Topics";

import "../styles/roadmap.css";
const RoadMap = () => {
	return (
		<section className="roadmap">
			<div className="roadmap-desc">
				<p>
					Aquí encontrarás una herramienta visual que te ayudará a comprender los fundamentos de la teoría musical a
					través de figuras, las cuales surgen al dibujar estructuras musicales sobre el reloj cromático.
				</p>
			</div>
			<Topics />
			<div className="conventions">
				<p>Debes tener en cuenta el cifrado americano para utilizar la herramienta del reloj cromático.</p>
				<p>A = LA, B = SI, C = DO, D = RE, E = MI, F = FA, G = SOL</p>
			</div>
		</section>
	);
};
export default RoadMap;
