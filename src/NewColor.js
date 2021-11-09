import React, { useState } from "react";
import { useHistory } from "react-router";

export default function NewColor({ addColor }) {
	const [formData, updateData] = useState({
		name: "",
		value: "#000000",
	});
	const history = useHistory();

	const handleChange = (evt) => {
		const { name, value } = evt.target;

		updateData((fData) => ({
			...fData,
			[name]: value,
		}));
	};

	const handleSubmit = (evt) => {
		evt.preventDefault();
		if (Object.values(formData).includes(""))
			alert("All values must be filled out");
		else {
			addColor(formData);
			history.push("/");
		}
	};

	return (
		<div>
			<form
				onChange={(evt) => handleChange(evt)}
				onSubmit={(evt) => handleSubmit(evt)}
			>
				<div>
					<label htmlFor="name">Color Name</label>
					<input type="text" name="name" />
				</div>
				<div>
					<label htmlFor="value">Color Value</label>
					<input type="color" name="value" />
				</div>
				<button type="submit">Add this color</button>
			</form>
		</div>
	);
}
