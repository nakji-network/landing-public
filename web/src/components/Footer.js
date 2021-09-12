import React from "react"
import images from "../images/images"

const Footer = ({ data }) => {
	return (
		<footer className="md:py-18 py-8 border-t border-white bg-black-100">
			<div className="container mx-auto sm:px-4 px-7">
				<div className="flex flex-wrap -mx-4 items-center">
					<div className="w-1/2 px-4">
						<ul className="flex flex-wrap -mx-4 ">
							{
								data.buttons.map((button, i) => 
									<li key={i} className="px-4">
										<a href={button.url} ariaLabel={button.image}>
											<img src={images[button.image]} alt={button.image} />
										</a>
									</li>
								)
							}
						</ul>
					</div>
					<div className="w-1/2 px-4">
							<div className="brand-footer text-right">
								<a href="/#" className="inline-block" ariaLabel={"logo"} >
									<img src={images.logo} alt="logo" />
								</a>
							</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
