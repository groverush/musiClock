const musicNotes = [
	"C",
	["C#", "Db"],
	"D",
	["D#", "Eb"],
	"E",
	"F",
	["F#", "Gb"],
	"G",
	["G#", "Ab"],
	"A",
	["A#", "Bb"],
	"B",
];
const topics = [
	{
		title: "Intervalos",
		subtitle: "Aprende los conceptos clave sobre el sistema de intervalos",
	},
	{
		title: "Escalas",
		subtitle: "Aprende las estructuras de algunas de las escalas más comunes",
	},
	{
		title: "Acordes",
		subtitle: "Aprende las estructuras básicas de los acordes de 3 y 4 notas",
	},
];
const intervalsNames = [
	"Unísono - Octava Justa",
	"2m - Segunda menor",
	"2M - Segunda mayor",
	"3m - Tercera menor",
	"3M - Tercera Mayor",
	"4J - Cuarta Justa",
	"Tritono",
	"5J - Quinta Justa",
	"6m - Sexta menor",
	"6M - Sexta mayor",
	"7m - Séptima menor",
	"7M - Séptima Mayor",
];
const intervalsExamples = [
	{
		intervalName: "Unísono: 0 Semitonos",
		song: "Brianstorm - Artic Monkeys",
		intervalNotes: "F - F",
		embed: "https://www.youtube.com/embed/30w8DyEJ__0?si=btq6gqMkFLRX_tJ6",
		desc: "En los ocho primeros compases de la canción, podemos encontrar un intervalo de unísono de forma repetitiva en la guitarra sobre la nota Fa.",
	},
	{
		intervalName: "Segunda menor: 1 Semitono",
		song: "Jaws - Theme song",
		intervalNotes: "E - F",
		embed: "https://www.youtube.com/embed/MuOUBVZGPEs?si=3YxAUkks3X6yRovH",
		desc: "Las primeras dos notas que emiten las cuerdas conforman un intervalo de segunda menor entre la nota Mi y la nota Fa",
	},
	{
		intervalName: "Segunda mayor: 2 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Tercera menor: 3 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Tercera mayor: 4 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Cuarta justa: 5 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Tritono: 6 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Quinta justa: 7 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Sexta menor: 8 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Sexta mayor: 9 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Séptima menor: 10 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Séptima mayor: 11 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
	{
		intervalName: "Octava justa: 12 Semitonos",
		song: "",
		intervalNotes: "",
		embed: "",
		desc: "",
	},
];
const polygonIntervals = {
	unison: "polygon(8.14% 16.78%, 16.43% 29.73%, 0.49% 30.67%, 50% 50%)",
	min2: "polygon(7.69% 17.67%, 1.87% 29.32%, 50% 50%, 30.78% 2.76%, 18.54% 7.38%, 37.74% 36.53%)",
	maj2: "polygon(4.99% 17.96%, 4.35% 29.65%, 50% 50%, 56.76% -3%, 44.04% -2.68%, 41.56% 32.35%)",
	min3: "polygon(4.99% 17.96%, 4.35% 29.65%, 50% 50%, 81.63% 7.65%, 71.95% 1.01%, 46.16% 33.89%)",
	maj3: "polygon(4.99% 17.96%, 1.9% 29.04%, 50% 50%, 98.46% 29.37%, 94.29% 17.23%, 49.39% 36.65%)",
	perfect4: "polygon(6.81% 18.17%, 1.19% 28.96%, 50% 50%, 102.07% 56.17%, 102.69% 44.12%, 51.75% 38.17%)",
	tritonus: "polygon(6.77% 18.9%, 0.65% 29.01%, 93.78% 81.39%, 99.86% 70.5%)",
	perfect5: "polygon(6.77% 18.9%, 0.65% 29.01%, 40.87% 58.48%, 71.14% 100.06%, 79.68% 91.28%, 50% 50%)",
	min6: "polygon(7.72% 18.43%, 1.33% 29.98%, 38.21% 56.59%, 44.89% 103.08%, 55.93% 102.51%, 50% 50%)",
	maj6: "polygon(7.69% 18.16%, 1.22% 29.29%, 33.78% 53.98%, 18.85% 93.57%, 29.87% 98.6%, 50% 50%)",
	min7: "polygon(7.69% 18.16%, 2.14% 29.28%, 28.28% 50.30%, -0.43% 71.24%, 6.62% 82.69%, 50% 50%)",
	maj7: "polygon(7.69% 18.16%, 1.52% 29.28%, 31.95% 45.41%, -1.65% 44.31%, -3.17% 56.67%, 50% 50%)",
};

const polygonScales = {
	major: "polygon(50% 1%,93.62% 23.61%,	99.67% 47.81%,77.96% 93.09%,21.38% 93.1%,	0.99% 50.8%,8.03% 22.62%)",
	minor: "polygon(50% 1%, 76.79% 4.64%, 99.67% 47.81%, 77.96% 93.09%, 50.14% 101.06%, 7% 77.12%, 8.03% 22.62%)",
	melodicMinor: "polygon(50% 1%, 76.48% 4.03%, 99.67% 47.81%, 77.96% 93.09%, 21.38% 93.1%, 0.99% 50.8%, 8.03% 22.62%)",
	armonicMinor:
		"polygon(50% 1%, 76.18% 4.94%, 99.67% 47.81%, 77.96% 93.09%, 49.84% 103.81%, 0.99% 50.8%, 8.03% 22.62%)",
	armonicMajor:
		"polygon(50% 1%, 93.62% 23.61%, 99.67% 47.81%, 77.96% 93.09%, 49.84% 102.28%, 0.99% 50.8%, 8.03% 22.62%)",
	pentatonicMajor: "polygon(50% 1%, 93.62% 23.61%, 77.96% 93.09%, 21.38% 93.1%, 8.03% 22.62%)",
	pentatonicMinor: "polygon(76.79% 4.64%, 99.67% 47.81%, 77.96% 93.09%, 7.11% 76.20%, 8.03% 22.62%)",
	st: "polygon(25.21% 5.59%, 75.44% 5.77%, 95.15% 24.22%, 94.77% 75.97%, 76.43% 93.09%, 23.83% 94.32%, 6.5% 75.59%, 8.03% 22.62%)",
	ts: "polygon(50% 1%, 75.44% 6.77%, 99.67% 47.81%, 95.48% 75.12%, 50.92% 100.85%, 21.38% 93.1%, 0.99% 50.8%, 8.03% 22.62%)",
	augmented: "polygon(50% 1%, 93.62% 23.61%, 93.67% 75.67%, 51.12% 99.82%, 6.67% 75.68%, 8.03% 22.62%)",
	chromatic: "circle(50% at 50% 50%)",
};
const polygonChords = {
	major: "polygon(93.62% 23.61%, 77.96% 93.09%, 8.03% 22.62%)",
	minor: "polygon(76.79% 4.64%, 77.96% 93.09%, 8.03% 22.62%)",
	major6: "polygon(95.14% 24.97%, 21.38% 93.1%, 8.03% 22.62%)",
	sus2: "polygon(50% 1%, 77.96% 93.09%, 8.03% 22.62%)",
	sus4: "polygon(99.67% 47.81%, 77.96% 93.09%, 8.03% 22.62%)",
	sus4sus2: "polygon(49.89% -0.44%, 100.47% 51.12%, 76.43% 93.09%, 8.03% 22.62%)",
	diminished: "polygon(75.44% 6.77%, 95.48% 75.12%, 8.03% 22.62%)",
	augmented: "polygon(93.62% 23.61%, 51.12% 99.82%, 8.03% 22.62%)",
	major7: "polygon(93.01% 20.25%, 77.96% 93.09%, 1.24% 50.19%, 8.03% 22.62%)",
	dominant7: "polygon(96.07% 22.22%, 75.98% 94.5%, 7.92% 75.35%, 6.81% 23.84%)",
	minor7: "polygon(77.39% 93.51%, 7.92% 75.66%, 8.03% 22.62%, 74.99% 6.34%)",
	minor7b5: "polygon(92.69% 77.29%, 7.92% 75.66%, 8.03% 22.62%, 74.99% 6.34%)",
	diminished7: "polygon(96.36% 76.68%, 24.44% 94.63%, 8.03% 22.62%, 74.99% 6.34%)",
	augmentedMaj7: "polygon(93.62% 23.61%, 50.11% 100.43%, 1.24% 50.19%, 8.03% 22.62%)",
	augmented7: "polygon(93.62% 23.61%, 50.11% 100.74%, 7.97% 75.89%, 8.03% 22.62%)",
};
const scales = {
	major: [0, 2, 4, 5, 7, 9, 11],
	minor: [0, 2, 3, 5, 7, 8, 10],
	melodicMinor: [0, 2, 3, 5, 7, 9, 11],
	armonicMinor: [0, 2, 3, 5, 7, 8, 11],
	armonicMajor: [0, 2, 4, 5, 7, 8, 11],
	pentatonicMajor: [0, 2, 4, 7, 9],
	pentatonicMinor: [0, 3, 5, 7, 10],
	st: [0, 1, 3, 4, 6, 7, 9, 10],
	ts: [0, 2, 3, 5, 6, 8, 9, 11],
	augmented: [0, 2, 4, 6, 8, 10],
	chromatic: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};
const chords = {
	major: [0, 4, 7],
	minor: [0, 3, 7],
	major6: [0, 4, 9],
	sus2: [0, 2, 7],
	sus4: [0, 5, 7],
	sus4sus2: [0, 2, 5, 7],
	diminished: [0, 3, 6],
	augmented: [0, 4, 8],
	major7: [0, 4, 7, 11],
	dominant7: [0, 4, 7, 10],
	minor7: [0, 3, 7, 10],
	minor7b5: [0, 3, 6, 10],
	diminished7: [0, 3, 6, 9],
	augmentedMaj7: [0, 4, 8, 11],
	augmented7: [0, 4, 8, 10],
};
export {
	musicNotes,
	topics,
	polygonIntervals,
	polygonScales,
	polygonChords,
	intervalsNames,
	scales,
	chords,
	intervalsExamples,
};