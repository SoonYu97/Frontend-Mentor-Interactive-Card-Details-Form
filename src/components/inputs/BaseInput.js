import { forwardRef } from "react"

const BaseInput = forwardRef(
	({ type, id, placeholder, value, onChange }, ref) => {
		return (
			<input
				type={type}
				id={id}
				placeholder={placeholder}
				ref={ref}
				value={value}
				onChange={onChange}
        autoComplete={false}
			/>
		)
	}
)

export default BaseInput
