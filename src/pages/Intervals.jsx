import Clock from "../components/Clock";
import { drawAnInterval } from "../utils/polygonsFunctions";
import { intervalsNames } from "../constants/constants";
import { makeAnInterval } from "../utils/musicFunctions";
import { useStore } from "../store";
import "../styles/intervalos.css";
import "../styles/clock.css";
import { useState } from "react";
import intervalsExamples from '../../intervals.json'
const Intervalos = () => {
	const [intervalSelection, setIntervalSelection] = useState(0);
	let polygon = drawAnInterval(intervalSelection);
	const baseNotes = useStore(store => store.baseNotes);
	const baseAccidental = useStore(store => store.baseAccidental);
	const intervalNotes = makeAnInterval(baseNotes[0], baseAccidental, intervalSelection);
	function handleIntervalSelection(e) {
		setIntervalSelection(parseInt(e.target.value));
	}

	return (
		<section className="intervals">
			<div className="clock-wrapper">
				<Clock polygon={polygon} notesAvailable={intervalNotes} />
				<div className="controls">
					<select name="intervals" id="intervals" onChange={handleIntervalSelection} value={intervalSelection}>
						{intervalsNames.map((interval, index) => (
							<option key={interval} value={index}>
								{interval}
							</option>
						))}
					</select>
				</div>
				<div className="result-container">
					<h3>
						{intervalNotes.join(" - ")}{" "}
						<span className="semitones">{!parseInt(intervalSelection) ? "0/12" : intervalSelection} Semitonos</span>
					</h3>
				</div>
			</div>
			<section className="topic-content">
				<div className="topic-introduction">
					<h2>Intervalos</h2>
					<p>
						En música, un intervalo es la distancia que existe entre dos notas determinadas. Un intervalo puede ser
						armónico (cuando los sonidos se reproducen simultáneamente) o melódico (cuando los sonidos se reproducen
						sucesivamente). Podemos analizar los intervalos de manera ascendente (de grave a agudo) y descendente (de
						agudo a grave). Existen a su vez intervalos simples e intervalos compuestos. Los primeros son aquellos cuya
						distancia no sobrepasa la octava justa. Es decir, que la distancia entre las dos notas no es mayor de 12
						semitonos y los segundos son aquellos cuya distancia es mayor a una octava justa.
					</p>
					<p>
						En esta sección, abordaremos todo lo relacionado con los intervalos simples y veremos cada uno representado
						en el reloj cromático. En el podemos ver las 12 notas que dividen una octava representadas como horas del
						reloj, pero en este caso, nuestro punto de partida (y de llegada) lo indica la nota resaltada en amarillo y
						en el sentido de las manecillas del reloj podemos ver cómo se construye una escala por semitonos de manera
						ascendente y en el sentido contrario a las manecillas del reloj de forma descendente. Por lo tanto, desde
						nuestro punto de partida a la nota inmediatamente siguiente en el sentido de las manecillas del reloj existe
						1 semitono de distancia y esta es la distancia más pequeña que podemos encontrar y será la que nos servirá
						como unidad de medida para definir los demás intervalos.
					</p>
					<p></p>
				</div>
			</section>
			<section className="topic-explanation">
				<div>
					<h3>Intervalos Simples</h3>
					<p>
						Como ya mencionamos, los intervalos simples son aquellos cuya distancia no excede la octava y es en base a
						estos que se definen los intervalos compuestos puesto que se aplica la misma lógica, solo que en un rango
						más amplio. Los intervalos podemos clasificarlos en dos categorías: consonancias y disonancias.
					</p>
				</div>
				<section className="interval-categories">
					<div className="consonances">
						<h2>Consonancias</h2>
						<p>
							Son intervalos que generan menor tensión ya que comparten una mayor cantidad de armónicos dentro de su
							serie. Estos a su vez, se clasifican en consonancias perfectas y consonancias imperfectas siendo las
							primeras las menos tensas.
						</p>
						<div className="types-of-consonances">
							<div>
								<h4>Consonancias perfectas</h4>
								<ul className="perfect-consonances">
									<li>Unísono</li>
									<li>4J - Cuarta Justa</li>
									<li>5J - Quinta Justa</li>
									<li>8J - Octava Justa</li>
								</ul>
							</div>
							<div>
								<h4>Consonancias imperfectas</h4>
								<ul className="imperfect-consonances">
									<li>3m - Tercera menor</li>
									<li>3M - Tercera mayor</li>
									<li>6m - Sexta menor</li>
									<li>6M - Sexta mayor</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="dissonances">
						<h3>Disonancias</h3>
						<p>
							Son intervalos que generan mayor tensión ya que comparten una menor cantidad de armónicos dentro de su
							serie.
						</p>
						<h4>Disonancias</h4>
						<ul className="imperfect-consonances">
							<li>2m - Segunda menor</li>
							<li>2M - Segunda mayor</li>
							<li>7m - Séptima menor</li>
							<li>7M - Séptima mayor</li>
						</ul>
					</div>
				</section>
				<p>A continuación veremos algunas referencias musicales de estos intervalos de forma melódica ascendente.</p>
				{/* ---------------------------------------------- */}
				<div className="interval-examples">
					{intervalsExamples.map(interval => (
						<div key={interval.name} className="interval-example">
							<h3>{interval.intervalName}</h3>
							<h4>{interval.song}</h4>
							<h4>{interval.intervalNotes}</h4>
							<iframe
								src={interval.embed}
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin"
								allowFullScreen
							></iframe>
							<p>{interval.desc}</p>
						</div>
					))}
				</div>
				<h3></h3>
			</section>
		</section>
	);
};
export default Intervalos;
