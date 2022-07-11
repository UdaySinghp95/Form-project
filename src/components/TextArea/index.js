import React from "react";
import "./textAreaField.css";

function TextAreaField({ value, handleChange }) {
	return (
		<textarea
			className="ta14ta"
			type="text"
			placeholder="Other details"
			value={value}
			onChange={(e) => handleChange(e.currentTarget.value)}
		/>
	);
}

export default TextAreaField;

