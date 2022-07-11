import React from "react";
import "./button.css";

function Button({ handleClick, children }) {
	return (
		<button
			className="bt13btn"
			onClick={(e) => {
				e.preventDefault();
				handleClick();
			}}
		>
			{children}
		</button>
	);
}

export default Button;
