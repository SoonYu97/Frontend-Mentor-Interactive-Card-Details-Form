import CardLogo from "../card-logo.svg"
const CardSection = ({ confirm, name, number, month, year, cvc }) => {
	return (
		<section className="Card-section">
			<div className="Card-back">
				<span className="Cvc">{confirm ? cvc : "000"}</span>
			</div>
			<div className="Card-front">
				<div className="Circles">
					<img src={CardLogo} alt="card logo" width={60} />
				</div>
				<span className="Number">
					{confirm ? number : "0000 0000 0000 0000"}
				</span>
				<span className="Name">{confirm ? name : "Jane Appleseed"}</span>
				<span className="Date">{confirm ? `${month}/${year}` : "00/00"}</span>
			</div>
		</section>
	)
}

export default CardSection
