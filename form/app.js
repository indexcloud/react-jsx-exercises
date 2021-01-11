let TextInput = () => {
	const style = {
		border: "1px solid black",
		margin: "5px",
	};

	return (
		<div>
			<label for="text">Enter Something</label>
			<input type="text" id="text" style={style}></input>
		</div>
	);
};

let YesNoRadio = () => {
	return (
		<div>
			<input type="radio" id="yes" name="yesno" value="yes"></input>
			<label for="yes">Yes</label>
			<input type="radio" id="no" name="yesno" value="no"></input>
			<label for="no">No</label>
		</div>
	);
};

let SubmitButton = () => {
	const style = {
		margin: "5px",
	};
	return (
		<div>
			<button type="submit" style={style}>
				Submit
			</button>
		</div>
	);
};

let Form = () => {
	return (
		<div>
			<form>
				<TextInput />
				<TextInput />
				<TextInput />
				<YesNoRadio />
				<YesNoRadio />
				<SubmitButton />
			</form>
		</div>
	);
};

ReactDOM.render(<Form />, document.getElementById("root"));
