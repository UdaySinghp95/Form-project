import React from "react";
import "./radioButton.css";

function RadioButton({ value, placeholder, name, className }) {
	const id = Math.random().toFixed();
	return (
		<div className="rb14ctn">
			<input
				className={"rd14ip" + " " + className}
				type="radio"
				id={id}
				value={value}
				name={name}
			/>
			<label className="rd14lb" htmlFor={id}>
				{placeholder}
			</label>
		</div>
	);
}

export default RadioButton;
