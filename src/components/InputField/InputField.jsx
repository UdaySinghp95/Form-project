import React from "react";
import "./inputField.css";

function InputField({
	value,
	handleValue,
	placeholder,
	autoFocus,
	submit,
	disabled,
}) {
	return (
		<input
			value={value}
			onChange={(e) => handleValue(e.currentTarget.value)}
			className={"if12ip " + (submit && !value && " error ")}
			placeholder={placeholder}
			autoFocus={autoFocus}
			disabled={disabled}
		/>
	);
}

export default InputField;
