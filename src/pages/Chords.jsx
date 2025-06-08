import Clock from "../components/Clock";
import { useState } from "react";
import { useStore } from "../store";
import { makeChord } from "../utils/musicFunctions";
import { drawAChord } from "../utils/polygonsFunctions";
const Acordes = () => {
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const [selectedChord, setSelectedChord] = useState("major");
	const newChord = makeChord(baseNotes[0], baseAccidental, selectedChord);
	const newPolygonChord = drawAChord(selectedChord);
	function handleSelectedChord(e) {
		setSelectedChord(e.target.value);
	}

	return (
		<section className="chords">
			<div className="clock-wrapper">
				<Clock polygon={newPolygonChord} notesAvailable={newChord} />
				<div className="controls">
					<select name="scale" id="scale" onChange={handleSelectedChord} value={selectedChord}>
						<option value="major">Acorde mayor</option>
						<option value="minor">Acorde menor</option>
						<option value="major6">Acorde mayor 6</option>
						<option value="sus2">Acorde sus2</option>
						<option value="sus4">Acorde sus4</option>
						<option value="sus4sus2">Acorde sus4 sus2</option>
						<option value="diminished">Acorde disminuido</option>
						<option value="augmented">Acorde aumentado</option>
						<option value="major7">Acorde maj7</option>
						<option value="dominant7">Acorde dominante7</option>
						<option value="minor7">Acorde menor7</option>
						<option value="minor7b5">Acorde menor7 bemol5</option>
						<option value="diminished7">Acorde disminuido7</option>
						<option value="augmented-maj7">Acorde aumentado maj7</option>
						<option value="augmented7">Acorde aumentado7</option>
					</select>
				</div>
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
export default Acordes;
