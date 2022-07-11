import React from "react";
import RadioButton from "../RadioButton/RadioButton";
import "./radioContainer.css";

function RadioContainer({
	placeholder,
	name,
	handleValue,
	options = [],
	className,
})
 {
	return (
		<div className="rc15subCtn" onChange={(e) => handleValue(e.target.value)}>
			<p className="rc15p">{placeholder}</p>
			<div className="rc15rowCtn">
				{options.map((opt, index) => (
					<RadioButton
						value={opt}
						key={index}
						placeholder={opt}
						name={name}
						className={className}
					/>
				))}
			</div>
		</div>
	);
}

export default RadioContainer;
