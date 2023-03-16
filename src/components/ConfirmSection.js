import IconComplete from "../icon-complete.svg"

const ConfirmSection = ({ setConfirm }) => {
	const Continue = () => {
		setConfirm(false)
	}
	return (
		<section className="Confirm-section">
			<img src={IconComplete} alt="complete icon" />
			<h1>Thank you!</h1>
			<p>We've added your card details</p>
			<button onClick={Continue}>Continue</button>
		</section>
	)
}

export default ConfirmSection
