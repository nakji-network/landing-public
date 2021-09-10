import React from "react"
import images from "../images/images"

const Footer = ({ data }) => {
	return (
		<footer class="md:py-18 py-8 border-t border-white bg-black-100">
			<div class="container mx-auto sm:px-4 px-7">
				<div class="flex flex-wrap -mx-4 items-center">
					<div class="w-1/2 px-4">
						<ul class="flex flex-wrap -mx-4 ">
							{
								data.buttons.map((button, i) => 
									<li key={i} class="px-4"><a href={button.url}><img src={images[button.image]} alt="" /></a></li>
								)
							}
						</ul>
					</div>
					<div class="w-1/2 px-4">
							<div class="brand-footer text-right">
									<a href="#" class="inline-block"><img src={images.logo} alt="" /></a>
							</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer