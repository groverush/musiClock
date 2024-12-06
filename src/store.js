import { create } from "zustand";
import { makeChromaticScale } from "./utils/musicFunctions";
const store = set => ({
	baseNotes: ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"],
	baseAccidental: "#/b",
	setBaseNotes: (note, accidental) => set({ baseNotes: makeChromaticScale(note, accidental) }),
	setBaseAccidental: accidental => set({ baseAccidental: accidental })
});

export const useStore = create(store);
