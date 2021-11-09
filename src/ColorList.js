import { Link } from "react-router-dom";
import "./ColorList.css";

export default function ColorList({ colors }) {
	console.log(colors);
	const colorItems = colors.map((item, i) => {
		return (
			<li key={`${item.name}-listItem-${i}`}>
				<Link to={`colors/${item.name}`}>{item.name}</Link>
			</li>
		);
	});
	return (
		<div>
			<p>Select a color:</p>
			<ul id="colorList">{colorItems}</ul>
		</div>
	);
}
