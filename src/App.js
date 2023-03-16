import { useState, useRef } from "react"
import "./App.css"

function App() {
	const [name, setName] = useState("Jane Appleseed")
	const [number, setNumber] = useState("0000000000000000")
	const [date, setDate] = useState("00/00")
	const [cvc, setCvc] = useState("000")

	const nameRef = useRef()
	const numberRef = useRef()
	const monthRef = useRef()
	const yearRef = useRef()
	const cvcRef = useRef()

	const Confirm = (e) => {
		setName(nameRef.current.value)
		setNumber(numberRef.current.value)
		setDate(`${monthRef.current.value}/${yearRef.current.value}`)
		setCvc(cvcRef.current.value)
		e.preventDefault()
	}

	return (
		<div className="App">
			<section className="Card-section">
				<div className="Card-back">
					<span className="Cvc">{cvc}</span>
				</div>
				<div className="Card-front">
					<span className="Number">{number}</span>
					<span className="name">{name}</span>
					<span className="date">{date}</span>
				</div>
			</section>
			<section className="Form-section">
				<form onSubmit={Confirm}>
					<label htmlFor="name">
						Cardholder Name
						<input
							required
							type="text"
							id="name"
							placeholder="e.g. Jane Appleseed"
							ref={nameRef}
						/>
					</label>
					<label htmlFor="number">
						Card Number
						<input
							required
							type="number"
							id="number"
							placeholder="e.g. 1234 5678 9123 0000"
							ref={numberRef}
						/>
					</label>
					<label htmlFor="date">
						Exp. Date (MM/YY)
						<input
							required
							type="number"
							id="date"
							placeholder="MM"
							ref={monthRef}
						/>
						<input
							required
							type="number"
							id="date"
							placeholder="YY"
							ref={yearRef}
						/>
					</label>
					<label htmlFor="cvc">
						CVC
						<input
							required
							type="number"
							id="cvc"
							placeholder="e.g. 123"
							ref={cvcRef}
						/>
					</label>
					<button className="Confirm-button" type="submit">
						Confirm
					</button>
				</form>
			</section>
		</div>
	)
}

export default App
