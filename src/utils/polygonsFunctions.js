import { polygonIntervals, polygonScales, polygonChords } from "../constants/constants";

export function drawAnInterval(interval) {
	switch (interval) {
		case 0:
			return polygonIntervals.unison;
		case 1:
			return polygonIntervals.min2;

		case 2:
			return polygonIntervals.maj2;

		case 3:
			return polygonIntervals.min3;

		case 4:
			return polygonIntervals.maj3;

		case 5:
			return polygonIntervals.perfect4;

		case 6:
			return polygonIntervals.tritonus;

		case 7:
			return polygonIntervals.perfect5;

		case 8:
			return polygonIntervals.min6;

		case 9:
			return polygonIntervals.maj6;

		case 10:
			return polygonIntervals.min7;

		case 11:
			return polygonIntervals.maj7;
		case 12:
			return polygonIntervals.perfect8;
	}
}
export function drawAScale(scale) {
	switch (scale) {
		case "major":
			return polygonScales.major;
		case "minor":
			return polygonScales.minor;
		case "melodic-minor":
			return polygonScales.melodicMinor;
		case "armonic-minor":
			return polygonScales.armonicMinor;
		case "armonic-major":
			return polygonScales.armonicMajor;
		case "pentatonic-major":
			return polygonScales.pentatonicMajor;
		case "pentatonic-minor":
			return polygonScales.pentatonicMinor;
		case "st":
			return polygonScales.st;
		case "ts":
			return polygonScales.ts;
		case "augmented":
			return polygonScales.augmented;
		case "chromatic":
			return polygonScales.chromatic;
	}
}

export function drawAChord(scale) {
	switch (scale) {
		case "major":
			return polygonChords.major;
		case "minor":
			return polygonChords.minor;

		case "major6":
			return polygonChords.major6;

		case "sus2":
			return polygonChords.sus2;

		case "sus4":
			return polygonChords.sus4;

		case "sus4sus2":
			return polygonChords.sus4sus2;

		case "diminished":
			return polygonChords.diminished;

		case "augmented":
			return polygonChords.augmented;
		case "major7":
			return polygonChords.major7;
		case "dominant7":
			return polygonChords.dominant7;
		case "minor7":
			return polygonChords.minor7;
		case "minor7b5":
			return polygonChords.minor7b5;
		case "diminished7":
			return polygonChords.diminished7;
		case "augmented-maj7":
			return polygonChords.augmentedMaj7;
		case "augmented7":
			return polygonChords.augmented7;
	}
}
