import { Link } from "react-router-dom";
import "../styles/topic.css";
const Topic = ({ topic }) => {
	let pathToTopic = topic.title.toLowerCase();
	return (
		<Link className="topic" to={`${pathToTopic}`}>
			<img src="" alt="" />
			<div>
				<h3>{topic.title}</h3>
				<p>{topic.subtitle}</p>
			</div>
		</Link>
	);
};
export default Topic;
