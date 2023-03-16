import { useState } from "react"
import "./App.css"
import CardSection from "./components/CardSection"
import ConfirmSection from "./components/ConfirmSection"
import FormSection from "./components/FormSection"

function App() {
	const [confirm, setConfirm] = useState(true)

	const [name, setName] = useState("")
	const [number, setNumber] = useState("")
	const [month, setMonth] = useState("")
	const [year, setYear] = useState("")
	const [cvc, setCvc] = useState("")

	const cardProps = {
		confirm,
		name,
		number,
		month,
		year,
		cvc,
	}

	const Reset = () => {
		setName("")
		setNumber("")
		setMonth("")
		setYear("")
		setCvc("")
	}

	const formProps = {
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
	}

	return (
		<div className="App">
			<CardSection {...cardProps} />
			{confirm ? (
				<ConfirmSection setConfirm={setConfirm} Reset={Reset} />
			) : (
				<FormSection {...formProps} />
			)}
		</div>
	)
}

export default App
