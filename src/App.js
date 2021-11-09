import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import ColorList from "./ColorList";
import Welcome from "./Welcome";
import NewColor from "./NewColor";
import ColorDisplay from "./ColorDisplay";
import { getStoredColors, setStoredColors } from "./ColorStorage";
import "./App.css";

function App() {
	const [colors, updateColors] = useState([]);
	const addColor = (newColor) => {
		updateColors((oldColors) => {
			return [...oldColors, newColor];
		});
	};

	useEffect(() => {
		let storedColors = getStoredColors();
		if (storedColors) updateColors(storedColors);
	}, []);

	useEffect(() => {
		setStoredColors(colors);
	}, [colors]);

	// const history = useHistory();
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/colors">
						<Welcome />
						<ColorList colors={colors} />
					</Route>

					<Route exact path="/colors/new">
						<NewColor addColor={addColor} />
					</Route>
					<Route exact path="/colors/:color">
						<ColorDisplay colors={colors} />
					</Route>
					<Redirect to="/colors" />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
