import { makeMayorScale } from "../utils/musicFunctions";
import { expect, it, describe } from "vitest";

describe("it must return a mayor scale base on the given note and accidental", () => {
	it("receives a name of one note an return a mayor scale base on that criteria", () => {
		expect(makeMayorScale("Bb", "b")).toEqual(["Bb", "C", "D", "Eb", "F", "G", "A"]);
	});
});
