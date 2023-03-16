import BaseInput from "./BaseInput"

const CvcInput = ({ cvcRef, cvcError, cvc, setCvc }) => {
	const OnCvcChange = (e) => {
		let numStr = e.target.value.replace(/\s+/g, "").replace(/0/g, "")

		if (numStr.length > 3) {
			numStr = numStr.substr(0, 3)
		}
		if (parseInt(numStr) < 10) {
			setCvc("00" + numStr.replace(/0/g, ""))
		} else if (parseInt(numStr) < 100) {
			setCvc("0" + numStr.replace(/0/g, ""))
		} else {
			setCvc(numStr)
		}
	}
	return (
		<label htmlFor="cvc">
			CVC
			<BaseInput
				type="number"
				id="cvc"
				placeholder="e.g. 123"
				ref={cvcRef}
				value={cvc}
				onChange={OnCvcChange}
			/>
			<span className="error">{cvcError}</span>
		</label>
	)
}

export default CvcInput
