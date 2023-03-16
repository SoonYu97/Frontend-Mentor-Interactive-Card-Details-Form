import { useState } from "react"
import "./App.css"

function App() {
	const [name, setName] = useState("Jane Appleseed")
	const [number, setNumber] = useState("0000000000000000")
	const [date, setDate] = useState("00/00")
	const [cvc, setCvc] = useState("000")

	const Confirm = (e) => {
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
						Fruit:
						<input type="text" id="name" placeholder="e.g. Jane Appleseed" />
					</label>
					<label htmlFor="number">
						Fruit:
						<input
							type="number"
							id="number"
							placeholder="e.g. 1234 5678 9123 0000"
						/>
					</label>
					<label htmlFor="date">
						Fruit:
						<input type="number" id="date" placeholder="MM" />
						<input type="number" id="date" placeholder="YY" />
					</label>
					<label htmlFor="cvc">
						Fruit:
						<input type="number" id="cvc" placeholder="e.g. 123" />
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
