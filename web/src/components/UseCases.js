import React from "react"

const UseCases = ({ data }) => {
	return (
		<section className="sm:py-16 py-10 bg-black-100">
			<div className="ellipse-line sm:mb-21 mb-10"></div>
				<div className="max-w-content mx-auto sm:px-4 px-7">
				<h2 className="text-white sm:text-4xl text-3xxl font-ActionMedium mb-4 text-center">{data.header}</h2>
					<p className="text-black-100 text-base font-ArcoLight tracking-wide max-w-lg mx-auto text-center"></p>
					<div className="flex flex-wrap -mx-4 card-wrapper">
						{
							data.items.map((item, i) =>
								<div key={i} className="card px-4 md:w-2/6 w-full">
									<div className=" text-center bg-gradiant-orange border border-orange-secondary p-8 rounded md:mt-16 mt-7">
										<i className="inline-block"><img src={item.url} alt=""/></i>
										<h3 className="my-3 font-ActionBold text-black-100 text-2xl">{item.header}</h3>
										<p className="text-black-100  text-base font-ArcoLight tracking-wide">{item.text}</p>
									</div>
								</div>
							)
						}
					</div>
				<div className="ellipse-line2 mt-21 ml-auto"></div>
			</div>
		</section>
	)
}

export default UseCases
