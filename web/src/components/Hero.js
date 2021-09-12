import React from "react"
import images from "../images/images"

const Hero = ({ data }) => {
	return (
		<section className="sm:pb-18 sm:pt-0 pt-11 pb-11">
			<div className="container mx-auto sm:px-4 px-7">
					<div className="flex flex-wrap -mx-4">
							<div className="w-full px-4 sm:w-3/5">
									<div>
										<h1 className="text-4xl text-white font-ActionMedium md:text-5xl lg:text-6xl">{data.header}</h1>
										<p className="max-w-2xl mb-3 text-white lg:text-2xl md:text-xl font-ArcoLight sm:mb-9">{data.text}</p>
										<ul className="flex flex-wrap w-full -mx-3 cta-hero">
								    	<li className="px-2 sm:w-auto w-full sm:mb-0 mb-4"><a href={data.buttons.left.url} className="inline-flex items-center justify-center w-full text-base rounded-full text-black-100 bg-gradiant-primary h-14 min-w-40 font-ArcoSemi transition-all duration-100 sm:w-auto">{data.buttons.left.text}</a></li>
                  	  <li className="w-full px-2 sm:w-auto"><a href={data.buttons.right.url} className="inline-flex items-center justify-center w-full text-base text-yellow-500 border border-yellow-500 rounded-full h-14 min-w-40 font-ArcoSemi transition-all duration-100 hover:bg-yellow-500 hover:text-black-100 sm:w-auto">{data.buttons.right.text}</a></li>																			
										</ul>
									</div>
							</div>
							<div className="w-full px-4 sm:w-3/12">
									<div className="mt-8 img-holder sm:mt-0">
											<img src={images.connection18} alt="" className="w-auto max-w-auto"/>
									</div>
							</div>
					</div>
			</div>
  	</section>
	)
}

export default Hero
