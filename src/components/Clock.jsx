import { useStore } from "../store";
import "../styles/clock.css";
import * as Tone from "tone";

const Clock = ({ polygon, notesAvailable }) => {
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const setBaseNotes = useStore(store => store.setBaseNotes);
	const setBaseAccidental = useStore(store => store.setBaseAccidental);
	const indexOfC = baseNotes.indexOf("C");

	const handleAccidental = e => {
		setBaseAccidental(e.target.value);

		setBaseNotes(baseNotes[0], e.target.value);
	};
	const playNote = (e, note, index) => {
		const playThisNote = note.length > 1 ? note[0] + note[1] : note;
		const octave = baseNotes[0] !== "C" && index >= indexOfC ? 4 : 3;
		const synth = new Tone.Synth().toDestination();
		const now = Tone.now();

	
		if (e.detail == 1) {
			synth.triggerAttackRelease(`${playThisNote}${octave}`, "8n", now);
		} else {
			synth.triggerAttackRelease(`${playThisNote}${octave + 1}`, "8n", now);
		}
	
	};
	const playNoteOctaveUp = (note, index) => {
		const playThisNote = note.length > 1 ? note[0] + note[1] : note;
		const octave = baseNotes[0] !== "C" && index >= indexOfC ? 5 : 4;
		const synth = new Tone.Synth().toDestination();
		const now = Tone.now();

		synth.triggerAttackRelease(`${playThisNote}${octave}`, "8n", now);

		
	};
	const handleRootNote = e => {
		setBaseNotes(e.target.value, baseAccidental);

		setBaseAccidental(baseAccidental);
	};

	return (
		<section className="clock-container">
			<div className="clock">
				<div className="music-scale-figure" style={{ clipPath: polygon ? polygon : "polygon(0% 0%, 0% 0%)" }}></div>

				{baseNotes.map((note, index) => {
					let isDisabled = false;

					if (notesAvailable) {
						if (notesAvailable.includes(note)) {
							isDisabled = false;
						} else {
							isDisabled = true;
						}
					}
					return (
						<button
							key={note}
							className={`note-point`}
							onClick={e => playNote(e, note, index)}
							onDoubleClick={() => playNoteOctaveUp(note, index)}
							disabled={index === 0 ? false : notesAvailable ? isDisabled : false}
							style={{
								backgroundColor: isDisabled && index !== 0 && "#787878",
								color: isDisabled && index !== 0 && "#535353",
							}}
						>
							{note}
						</button>
					);
				})}
			</div>

			<section className="controls">
				<select name="musicNotes" id="music-notes" onChange={handleRootNote} value={baseNotes[0]}>
					{baseNotes.map(note => (
						<option key={note}>{note}</option>
					))}
				</select>
				<select name="accidentals" id="accidentals" onChange={handleAccidental} value={baseAccidental}>
					<option value="#/b">Enarmónicos (#/b)</option>
					<option value="#">Sostenidos (#)</option>
					<option value="b">Bemoles (b)</option>
				</select>
			</section>
		</section>
	);
};
export default Clock;
