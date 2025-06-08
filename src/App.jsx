import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { Home, RoadMap, Intervals, Scales, Chords } from "./pages";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
const App = () => {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="inner-container">
					<Routes>
						<Route path="/" element={<Home />}></Route>
						<Route path="/learn" element={<RoadMap />}></Route>
						<Route path="/learn/intervalos" element={<Intervals />}></Route>
						<Route path="/learn/escalas" element={<Scales />}></Route>
						<Route path="/learn/acordes" element={<Chords />}></Route>
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
};
export default App;
