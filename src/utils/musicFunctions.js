import { musicNotes } from "../constants/constants";
import { scales, chords } from "../constants/constants";

// BASE NOTES

export function makeChromaticScale(note, accidental = "#/b") {
	let indexNoteWithAccidental = 0;
	note = note.length > 2 ? note[0] + note[1] : note;
	for (let item in musicNotes) {
		if (Array.isArray(musicNotes[item]) && musicNotes[item].includes(note)) {
			indexNoteWithAccidental = item;
		}
	}

	const indexNote = note.length > 1 ? indexNoteWithAccidental : musicNotes.indexOf(note);

	let newChromaticScale = [...musicNotes.slice(indexNote, musicNotes.length).concat(musicNotes.slice(0, indexNote))];

	if (accidental === "#") {
		const newChromaticScaleWithSharps = [...newChromaticScale.map(note => (Array.isArray(note) ? note[0] : note))];
		return newChromaticScaleWithSharps;
	} else if (accidental === "b") {
		const newChromaticScaleWithFlats = [...newChromaticScale.map(note => (Array.isArray(note) ? note[1] : note))];
		return newChromaticScaleWithFlats;
	} else {
		newChromaticScale = newChromaticScale.map(note => (Array.isArray(note) ? note.join("/") : note));
	}
	return newChromaticScale;
}

export function makeMajorScale(note, accidental = "#/b") {
	const newChromaticScale = makeChromaticScale(note, accidental);
	const mayorScale = newChromaticScale.filter((note, index) => {
		if (index === 0 || index === 2 || index === 4 || index === 5 || index === 7 || index === 9 || index === 11) {
			return note;
		}
	});
	return mayorScale;
}
export function makeAnInterval(note, accidental = "#/b", interval) {
	const newChromaticScale = makeChromaticScale(note, accidental);
	const newInterval = newChromaticScale.filter((note, index) => {
		if (index === 0 || index === parseInt(interval)) {
			return note;
		}
	});
	return newInterval.length === 1 ? newInterval.concat(newInterval) : newInterval;
}

export function makeChord(note, accidental = "#/b", chord) {
	const newChromaticScale = makeChromaticScale(note, accidental);
	const newScale = newChromaticScale.filter((note, index) => {
		switch (chord) {
			case "major":
				return chords.major.includes(index);
			case "minor":
				return chords.minor.includes(index);
			case "major6":
				return chords.major6.includes(index);
			case "sus2":
				return chords.sus2.includes(index);
			case "sus4":
				return chords.sus4.includes(index);
			case "sus4sus2":
				return chords.sus4sus2.includes(index);
			case "diminished":
				return chords.diminished.includes(index);
			case "augmented":
				return chords.augmented.includes(index);
			case "major7":
				return chords.major7.includes(index);
			case "dominant7":
				return chords.dominant7.includes(index);
			case "minor7":
				return chords.minor7.includes(index);
			case "minor7b5":
				return chords.minor7b5.includes(index);
			case "diminished7":
				return chords.diminished7.includes(index);
			case "augmented-maj7":
				return chords.augmentedMaj7.includes(index);
			case "augmented7":
				return chords.augmented7.includes(index);
		}
	});
	return newScale;
}

export function makeScale(note, accidental = "#/b", scale) {
	const newChromaticScale = makeChromaticScale(note, accidental);
	const newScale = newChromaticScale.filter((note, index) => {
		switch (scale) {
			case "major":
				return scales.major.includes(index);
			case "minor":
				return scales.minor.includes(index);
			case "melodic-minor":
				return scales.melodicMinor.includes(index);
			case "armonic-minor":
				return scales.armonicMinor.includes(index);
			case "armonic-major":
				return scales.armonicMajor.includes(index);
			case "pentatonic-major":
				return scales.pentatonicMajor.includes(index);
			case "pentatonic-minor":
				return scales.pentatonicMinor.includes(index);
			case "st":
				return scales.st.includes(index);
			case "ts":
				return scales.ts.includes(index);
			case "augmented":
				return scales.augmented.includes(index);
			case "chromatic":
				return scales.chromatic.includes(index);
		}
	});
	return newScale;
}
