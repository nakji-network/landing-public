import React from "react"

const RichestBlockchain = ({ data }) => {
	return (
		<section class="md:bg-blockchain bg-gradiant-secondary pt-15 pb-24 relative z-10">
      <div class="max-w-content mx-auto sm:px-4 px-7">
        <div class="ellipse-line sm:mb-21 mb-10"></div>
          <div class="flex -mx-8 flex-wrap">
						<div class="sm:w-1/2 w-full px-8">
							<h3 class="text-white sm:text-4xl text-3xxl font-ActionMedium mb-4">{data.header}</h3>
							{
								data.text.map((text, i) =>
									<p key={i} class="text-white text-base mb-6.5 font-ArcoLight tracking-wide">{text}</p>
								)
							}
						</div>
						<div class="sm:w-1/2 w-full px-8">
							<ul class="points">
								{
									data.advantages.map((advantage, i) =>
										<li key={i} class="border border-white sm:p-8 p-7 rounded mb-8">
											<h4 class="text-white sm:text-2xl text-lg sm:mb-3 font-ActionBold">{advantage}</h4>
											<p class="text-white sm:text-base text-sm font-ArcoLight tracking-wide"></p>
										</li>
									)
								}
							</ul>
						</div>
					</div>
        <div class="text-right sm:block hidden">
          <div class="ellipse-line2 mt-21 ml-auto"></div>
        </div>
      </div>
    </section>
	)
}

export default RichestBlockchain