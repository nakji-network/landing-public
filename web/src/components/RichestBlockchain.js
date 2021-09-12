import React from "react"

const RichestBlockchain = ({ data }) => {
	return (
		<section className="md:bg-blockchain bg-gradiant-secondary pt-15 pb-24 relative z-10">
      <div className="max-w-content mx-auto sm:px-4 px-7">
        <div className="ellipse-line sm:mb-21 mb-10"></div>
          <div className="flex -mx-8 flex-wrap">
						<div className="sm:w-1/2 w-full px-8">
							<h3 className="text-white sm:text-4xl text-3xxl font-ActionMedium mb-4">{data.header}</h3>
							{
								data.text.map((text, i) =>
									<p key={i} className="text-white text-base mb-6.5 font-ArcoLight tracking-wide">{text}</p>
								)
							}
						</div>
						<div className="sm:w-1/2 w-full px-8">
							<ul className="points">
								{
									data.advantages.map((advantage, i) =>
										<li key={i} className="border border-white sm:p-8 p-7 rounded mb-8">
											<h4 className="text-white sm:text-2xl text-lg sm:mb-3 font-ActionBold">{advantage}</h4>
											<p className="text-white sm:text-base text-sm font-ArcoLight tracking-wide"></p>
										</li>
									)
								}
							</ul>
						</div>
					</div>
        <div className="text-right sm:block hidden">
          <div className="ellipse-line2 mt-21 ml-auto"></div>
        </div>
      </div>
    </section>
	)
}

export default RichestBlockchain
