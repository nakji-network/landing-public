import React from "react"
import images from "../images/images"

const Hero = ({ data }) => {
	return (
		<section className="sm:pb-18 sm:pt-0 pt-11 pb-11">
			<div className="container mx-auto sm:px-4 px-7">
					<div className="flex flex-wrap -mx-4">
							<div className="sm:w-3/5 w-full px-4">
									<div>
										<h1 className="text-white font-ActionMedium text-4xl md:text-5xl lg:text-6xl">{data.header}</h1>
										<p className="text-white lg:text-2xl md:text-xl font-ArcoLight max-w-2xl sm:mb-9 mb-3">{data.text}</p>
										<ul className="flex -mx-3 w-full flex-wrap cta-hero">
								    	<li className="px-2 sm:w-auto w-full sm:mb-0 mb-4"><a href={data.buttons.left.url} className="text-black-100 rounded-3xl bg-gradiant-primary text-base h-14 inline-flex items-center justify-center w-full min-w-40 font-ArcoSemi transition-all duration-100 sm:w-auto w-full">{data.buttons.left.text}</a></li>
                  	  <li className="px-2 sm:w-auto w-full"><a href={data.buttons.right.url} className="text-yellow-500 rounded-3xl h-14  inline-flex text-base items-center justify-center w-full min-w-40 border border-yellow-500 font-ArcoSemi transition-all duration-100 hover:bg-yellow-500 hover:text-black-100 sm:w-auto w-full">{data.buttons.right.text}</a></li>																			
										</ul>
									</div>
							</div>
							<div className="sm:w-3/12 w-full px-4">
									<div className="img-holder sm:mt-0 mt-8">
											<img src={images.connection18} alt="" className="w-auto max-w-auto"/>
									</div>
							</div>
					</div>
			</div>
  	</section>
	)
}

export default Hero
