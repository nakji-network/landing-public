import React from "react"
import Math from '../images/Math.svg'
import Dashboard from '../images/Dashboard.svg'
import Infinity from '../images/Infinity.svg'

const icons = { Math, Dashboard, Infinity }
console.log(icons)

const UseCases = ({ data }) => {
	return (
		<section className="py-10 sm:py-16 bg-black-100">
			<div className="mb-10 ellipse-line sm:mb-21"></div>
				<div className="mx-auto max-w-content sm:px-4 px-7">
				<h2 className="mb-4 text-center text-white sm:text-4xl text-3xxl font-ActionMedium">{data.header}</h2>
					<p className="max-w-lg mx-auto text-base tracking-wide text-center text-black-100 font-ArcoLight"></p>
					<div className="flex flex-wrap -mx-4 card-wrapper">
						{
							data.items.map((item, i) =>
								<div key={i} className="w-full px-4 card md:w-2/6">
									<div className="p-8 text-center border rounded bg-gradiant-orange border-orange-secondary md:mt-16 mt-7">
										<i className="inline-block"><img src={icons[item.image]} alt={item.image} /></i>
										<h3 className="my-3 text-2xl font-ActionBold text-black-100">{item.header}</h3>
										<p className="text-base tracking-wide text-black-100 font-ArcoLight">{item.text}</p>
									</div>
								</div>
							)
						}
					</div>
				<div className="ml-auto ellipse-line2 mt-21"></div>
			</div>
		</section>
	)
}

export default UseCases
