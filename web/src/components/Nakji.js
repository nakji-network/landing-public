import React from "react"

const Nakji = ({ data }) => {
	return (
		<section className="md:py-28 py-11 bg-orange-primary  border-b border-black-100">
			<div className="max-w-content mx-auto md:px-20 px-7">
				<h2 className="text-black font-ActionMedium md:text-5xl sm:text-3xl text-2xl text-center">{data.text}</h2>
			</div>
		</section>
	)
}

export default Nakji
