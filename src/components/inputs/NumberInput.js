import BaseInput from "./BaseInput"

const NumberInput = ({ numberRef, numberError, number, setNumber }) => {
	const OnNumberChange = (e) => {
		let numbers = []
		let numStr = e.target.value.replace(/\s+/g, "")

		if (numStr.length > 16) {
			numStr = numStr.substr(0, 16)
		}
		for (let i = 0; i < numStr.length; i += 4) numbers.push(numStr.substr(i, 4))
		setNumber(numbers.join(" "))
	}
	return (
		<label htmlFor="number">
			Card Number
			<BaseInput
				type="text"
				id="number"
				placeholder="e.g. 1234 5678 9123 0000"
				ref={numberRef}
				value={number}
				onChange={OnNumberChange}
			/>
			<span className="error">{numberError}</span>
		</label>
	)
}

export default NumberInput
