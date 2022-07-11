import React, { useState } from "react";
import "./home.css";
import Button from "../components/Button/Button";
import InputField from "../components/InputField/InputField";
import TextAreaField from "../components/TextArea";
import RadioContainer from "../components/RadioContainer/RadioContainer";

function Home({}) {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [marriedStatus, setMarriedStatus] = useState("");
	const [gender, setGender] = useState("");
	const [spouseName, setSpouseName] = useState("");
	const [details, setDetails] = useState("");
	const [submit, setSumbit] = useState(false);
	const [visible, setVisble] = useState(true);

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setMarriedStatus("");
		setGender("");
		setSpouseName("");
		setDetails("");
		setSumbit(false);
	};

	const hanldeSubmit = () => {
		setSumbit(true);

		if (!firstName || !lastName || !marriedStatus || !gender || !marriedStatus)
			return;

		setVisble(false);
	};

	return (
		<div className="hm11ctn animate__animated animate__backInDown">
			<h1 className="hm11hd">
				{visible ? "Create Account" : "Thanks for Register"}
			</h1>
			{visible && (
				<>
					<InputField
						value={firstName}
						handleValue={setFirstName}
						placeholder="first name"
						autoFocus={true}
						submit={submit}
					/>
					<InputField
						value={lastName}
						handleValue={setLastName}
						placeholder="last name"
						submit={submit}
					/>
					<RadioContainer
						name="gender"
						handleValue={setGender}
						options={["male", "female"]}
						placeholder="Gender"
						className={submit && !gender && "error"}
					/>
					<RadioContainer
						name="marriedStatus"
						handleValue={setMarriedStatus}
						options={["Married", "UnMarried"]}
						placeholder="Married Status"
						className={submit && !marriedStatus && "error"}
					/>
					<InputField
						value={spouseName}
						handleValue={setSpouseName}
						placeholder="Spouce Name"
						disabled={marriedStatus == "UnMarried"}
					/>
					<TextAreaField
						value={details}
						handleChange={setDetails}
						placeholder="Other Details"
					/>
					<div className="hm11rowCtn">
						<Button handleClick={resetForm}>Reset</Button>
						<Button handleClick={hanldeSubmit}>Submit</Button>
					</div>
				</>
			)}
		</div>
	);
}

export default Home;
