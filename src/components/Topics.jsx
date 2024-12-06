import { topics } from "../constants/constants";
import Topic from "./Topic";
import "../styles/topics.css";
export const Topics = () => {
	return (
		<div className="topics">
			{topics.map((topic, index) => (
				<Topic key={`${topic}${index + 1}`} topic={topic} />
			))}
		</div>
	);
};
