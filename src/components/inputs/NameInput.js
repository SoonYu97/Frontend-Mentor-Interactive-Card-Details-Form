import BaseInput from "./BaseInput"

const NameInput = ({ name, setName, nameRef, nameError }) => {
	const OnNameChange = (e) => {
		setName(e.target.value)
	}
	return (
		<label htmlFor="name">
			Cardholder Name
			<BaseInput
				type="text"
				id="name"
				placeholder="e.g. Jane Appleseed"
				ref={nameRef}
				value={name}
				onChange={OnNameChange}
			/>
			<span className="error">{nameError}</span>
		</label>
	)
}

export default NameInput
