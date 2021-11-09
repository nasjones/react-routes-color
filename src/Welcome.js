import { Link } from "react-router-dom";
import "./Welcome.css";

export default function Welcome() {
	return (
		<div id="welcome">
			<h1>Welcome to the color factory</h1>
			<Link to="colors/new">Add a color</Link>
		</div>
	);
}
