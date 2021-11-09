import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import "./ColorDisplay.css";

export default function ColorDisplay({ colors }) {
	const params = useParams();
	const history = useHistory();
	console.log(params);
	const color = colors.find((item) => item.name === params.color);
	console.log(colors);
	if (!color) history.push("/");
	return (
		<div id="colorDiv" style={{ backgroundColor: color.value }}>
			<h1>This is {color.name}</h1>
			<h1>Isn't it beautiful</h1>
			<Link to="/colors">Go Back.</Link>
		</div>
	);
}
