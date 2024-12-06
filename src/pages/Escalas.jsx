import { useState } from "react";
import Clock from "../components/Clock";
import { useStore } from "../store";
import { makeScale } from "../utils/musicFunctions";
import { drawAScale } from "../utils/polygonsFunctions";

const Escalas = () => {
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const [selectedScale, setSelectedScale] = useState("chromatic");
	const newScale = makeScale(baseNotes[0], baseAccidental, selectedScale);
	const newPolygonScale = drawAScale(selectedScale);
	function handleSelectedScale(e) {
		setSelectedScale(e.target.value);
	}
	console.log(newPolygonScale);
	return (
		<section className="scales">
			<div className="clock-wrapper">
				<Clock polygon={newPolygonScale} notesAvailable={newScale} />
				<div className="controls">
					<select name="scale" id="scale" onChange={handleSelectedScale} value={selectedScale}>
						<option value="chromatic">Escala cromática</option>
						<option value="major">Escala mayor natural</option>
						<option value="minor">Escala menor natural</option>
						<option value="melodic-minor">Escala menor melódica</option>
						<option value="armonic-minor">Escala menor armónica</option>
						<option value="armonic-major">Escala mayor armónica</option>
						<option value="pentatonic-major">Escala pentatonica mayor</option>
						<option value="pentatonic-minor">Escala pentatónica menor</option>
						<option value="st">Escala simétrica dim(1s+2s) </option>
						<option value="ts">Escala simétrica dim(2s+1s)</option>
						<option value="augmented">Escala simétrica aumentada</option>
					</select>
				</div>
				{/* <div className="result-container">
					<h3>
						{intervalNotes.join(" - ")}{" "}
						<span className="semitones">{!parseInt(intervalSelection) ? "0/12" : intervalSelection} Semitonos</span>
					</h3>
				</div> */}
			</div>

			<div className="topic-content">
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>

				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
				<div className="topic-description">
					<h2>Intervalos</h2>
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores pariatur tempora quos distinctio, fuga sit
						dolorum excepturi mollitia expedita molestias facilis quibusdam cumque modi aut aspernatur esse labore
						commodi eveniet.
					</p>
				</div>
			</div>
		</section>
	);
};
export default Escalas;
