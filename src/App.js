import { useState } from "react"
import "./App.css"
import CardSection from "./components/CardSection"
import ConfirmSection from "./components/ConfirmSection"
import FormSection from "./components/FormSection"

function App() {
	const [confirm, setConfirm] = useState(false)

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

	const formProps = {
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
	}

	return (
		<main className="App">
			<CardSection {...cardProps} />
			{confirm ? (
				<ConfirmSection setConfirm={setConfirm}  />
			) : (
				<FormSection {...formProps} />
			)}
		</main>
	)
}

export default App
