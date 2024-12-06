import { makeChromaticScale } from "../utils/musicFunctions";
import { describe, expect, it } from "vitest";

describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given", () => {
		expect(makeChromaticScale("B")).toEqual([
			"B",
			"C",
			"C#/Db",
			"D",
			"D#/Eb",
			"E",
			"F",
			"F#/Gb",
			"G",
			"G#/Ab",
			"A",
			"A#/Bb"
		]);
	});
});
describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given even if the note contains an accidental", () => {
		expect(makeChromaticScale("Bb")).toEqual([
			"A#/Bb",
			"B",
			"C",
			"C#/Db",
			"D",
			"D#/Eb",
			"E",
			"F",
			"F#/Gb",
			"G",
			"G#/Ab",
			"A"
		]);
	});
});
describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given even if the note contains an accidental and return the accidentals based on selection", () => {
		expect(makeChromaticScale("Bb", "b")).toEqual(["Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A"]);
	});
});
describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given even if the note contains enharmonics and return the accidentals based on selection", () => {
		expect(makeChromaticScale("A#/Bb")).toEqual([
			"A#/Bb",
			"B",
			"C",
			"C#/Db",
			"D",
			"D#/Eb",
			"E",
			"F",
			"F#/Gb",
			"G",
			"G#/Ab",
			"A"
		]);
	});
});
describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given even if the note contains enharmonics and return the accidentals based on selection", () => {
		expect(makeChromaticScale("F#/Gb")).toEqual([
			"F#/Gb",
			"G",
			"G#/Ab",
			"A",
			"A#/Bb",
			"B",
			"C",
			"C#/Db",
			"D",
			"D#/Eb",
			"E",
			"F"
		]);
	});
});

describe("the scale must be chromatic", () => {
	it("Should return the scale based on the root note given even if the note contains enharmonics and return the accidentals based on selection", () => {
		expect(makeChromaticScale("F#/Gb", "b")).toEqual(["Gb", "G", "Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F"]);
	});
});
