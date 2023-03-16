import { useState, useRef, useEffect } from "react"
import CvcInput from "./inputs/CvcInput"
import DateInput from "./inputs/DateInput"
import NameInput from "./inputs/NameInput"
import NumberInput from "./inputs/NumberInput"

const FormSection = ({
	confirm,
	setConfirm,
	name,
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

	useEffect(() => {
		setName("")
		setNumber("")
		setMonth("")
		setYear("")
		setCvc("")
		ResetError()
	}, [confirm, setName, setNumber, setMonth, setYear, setCvc])

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
			setConfirm(true)
		}
	}

	return (
		<section className="Form-section">
			<form onSubmit={Confirm}>
				<NameInput
					name={name}
					setName={setName}
					nameError={nameError}
					nameRef={nameRef}
				/>
				<NumberInput
					number={number}
					setNumber={setNumber}
					numberError={numberError}
					numberRef={numberRef}
				/>
				<div className="Form-last-row">
					<DateInput
						month={month}
						year={year}
						setMonth={setMonth}
						setYear={setYear}
						dateError={dateError}
						monthRef={monthRef}
						yearRef={yearRef}
					/>
					<CvcInput
						cvc={cvc}
						setCvc={setCvc}
						cvcError={cvcError}
						cvcRef={cvcRef}
					/>
				</div>
				<button type="submit">Confirm</button>
			</form>
		</section>
	)
}

export default FormSection
