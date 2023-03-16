import { useState, useRef } from "react"

const FormSection = ({
	setConfirm,
	setName,
	number,
	setNumber,
	month,
	setMonth,
	year,
	setYear,
	cvc,
	setCvc,
}) => {
	const [nameError, setNameError] = useState("")
	const [numberError, setNumberError] = useState("")
	const [dateError, setDateError] = useState("")
	const [cvcError, setCvcError] = useState("")

	const nameRef = useRef()
	const numberRef = useRef()
	const monthRef = useRef()
	const yearRef = useRef()
	const cvcRef = useRef()

	const ResetError = () => {
		nameRef.current.className = ""
		numberRef.current.className = ""
		monthRef.current.className = ""
		yearRef.current.className = ""
		cvcRef.current.className = ""
		setNameError("")
		setNumberError("")
		setDateError("")
		setCvcError("")
	}

	const Confirm = (e) => {
		e.preventDefault()
		let error = false
		ResetError()
		const nameTemp = nameRef.current.value
		const numberTemp = numberRef.current.value
		const monthTemp = monthRef.current.value
		const yearTemp = yearRef.current.value
		const cvcTemp = cvcRef.current.value

		if (nameTemp === "") {
			error = true
			nameRef.current.className = "error"
			setNameError("Can't be blank")
		}

		if (!/^[0-9 ]+$/.test(numberTemp)) {
			error = true
			numberRef.current.className = "error"
			setNumberError("Wrong format, numbers only")
		} else if (numberTemp.length !== 19) {
			error = true
			numberRef.current.className = "error"
			setNumberError("Incorrect length, must have 16 digits")
		}

		if (monthTemp === "") {
			error = true
			monthRef.current.className = "error"
			setDateError("Can't be blank")
		}

		if (yearTemp === "") {
			error = true
			yearRef.current.className = "error"
			setDateError("Can't be blank")
		}

		if (cvcTemp === "") {
			error = true
			cvcRef.current.className = "error"
			setCvcError("Can't be blank")
		}

		if (!error) {
			setName(nameTemp)
			setConfirm(true)
		}
	}

	const OnNumberChange = (e) => {
		let numbers = []
		let numStr = e.target.value.replace(/\s+/g, "")

		if (numStr.length > 16) {
			numStr = numStr.substr(0, 16)
		}
		for (let i = 0; i < numStr.length; i += 4) numbers.push(numStr.substr(i, 4))
		setNumber(numbers.join(" "))
	}

	const OnMonthChange = (e) => {
		let numStr = e.target.value.replace(/\s+/g, "").replace(/0/g, "")
		if (numStr.length > 2) {
			numStr = numStr.substr(0, 2)
		}
		if (parseInt(numStr) > 12) {
			numStr = numStr.substr(0, 1)
		}
		if (parseInt(numStr) < 10) {
			setMonth("0" + numStr.replace(/0/g, ""))
		} else {
			setMonth(numStr)
		}
	}

	const OnYearChange = (e) => {
		let numStr = e.target.value.replace(/\s+/g, "").replace(/0/g, "")

		if (numStr.length > 2) {
			numStr = numStr.substr(0, 2)
		}
		if (parseInt(numStr) < 10) {
			setYear("0" + numStr.replace(/0/g, ""))
		} else {
			setYear(numStr)
		}
	}

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
		<section className="Form-section">
			<form onSubmit={Confirm}>
				<label htmlFor="name">
					Cardholder Name
					<input
						type="text"
						id="name"
						placeholder="e.g. Jane Appleseed"
						ref={nameRef}
					/>
					<span className="error">{nameError}</span>
				</label>
				<label htmlFor="number">
					Card Number
					<input
						type="text"
						id="number"
						placeholder="e.g. 1234 5678 9123 0000"
						ref={numberRef}
						value={number}
						onChange={OnNumberChange}
					/>
					<span className="error">{numberError}</span>
				</label>
				<div className="Form-last-row">
					<label htmlFor="date" className="Date-label">
						Exp. Date (MM/YY)
						<div className="Date-inputs">
							<input
								type="number"
								id="date"
								placeholder="MM"
								min={1}
								max={12}
								ref={monthRef}
								value={month}
								onChange={OnMonthChange}
							/>
							<input
								type="number"
								id="date"
								placeholder="YY"
								min={23}
								max={99}
								ref={yearRef}
								value={year}
								onChange={OnYearChange}
							/>
						</div>
						<span className="error">{dateError}</span>
					</label>
					<label htmlFor="cvc">
						CVC
						<input
							type="number"
							id="cvc"
							placeholder="e.g. 123"
							ref={cvcRef}
							value={cvc}
							onChange={OnCvcChange}
						/>
						<span className="error">{cvcError}</span>
					</label>
				</div>
				<button type="submit">
					Confirm
				</button>
			</form>
		</section>
	)
}

export default FormSection
