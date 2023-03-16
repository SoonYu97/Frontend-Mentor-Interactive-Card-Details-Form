import BaseInput from "./BaseInput"

const DateInput = ({
	month,
	year,
	setMonth,
	setYear,
	monthRef,
	yearRef,
	dateError,
}) => {
	const OnMonthChange = (e) => {
		let numStr = e.target.value.replace(/\s+/g, "").replace(/^0+/, "")
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
		let numStr = e.target.value.replace(/\s+/g, "").replace(/^0+/, "")

		if (numStr.length > 2) {
			numStr = numStr.substr(0, 2)
		}
		if (parseInt(numStr) < 10) {
			setYear("0" + numStr.replace(/0/g, ""))
		} else {
			setYear(numStr)
		}
	}

	return (
		<label htmlFor="date" className="Date-label">
			Exp. Date (MM/YY)
			<div className="Date-inputs">
				<BaseInput
					type="number"
					id="month"
					placeholder="MM"
					ref={monthRef}
					value={month}
					onChange={OnMonthChange}
				/>
				<BaseInput
					type="number"
					id="year"
					placeholder="YY"
					ref={yearRef}
					value={year}
					onChange={OnYearChange}
				/>
			</div>
			<span className="error">{dateError}</span>
		</label>
	)
}

export default DateInput
