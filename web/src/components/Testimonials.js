import React from "react"
import { Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/a11y'
import '../styles/swiper.css'

const Testimonials = ({ data }) => {
	return (
		<section className="testimonial md:py-40 sm:py-24 py-15 bg-testimonial bg-cover bg-black-100">
			<div className="max-w-content mx-auto sm:px-4 px-7">
				<Swiper
					modules={[Pagination, A11y]}
					spaceBetween={30}
					pagination={{clickable: true}}
				>
					{
						data.map((item, i) => 
							<SwiperSlide key={i}>
								<p className="text-right text-white md:text-4xl sm:text-3xl text-2xl font-ActionMedium mb-4 max-w-4xl ml-auto">{item.text}</p>
								<div className="author">
									<p className="text-right text-white text-base font-ArcoSemi">—</p>
									<h4 className="text-right text-white text-base font-ArcoSemi">{item.author.name}</h4>
									<p className="text-white  text-base font-ArcoLight tracking-wide text-right">{item.author.organization}</p>
								</div>
							</SwiperSlide>
						)
					}
				</Swiper>
				<div className="ellipse-line mt-2 ml-0  md:block hidden"></div>
			</div>
		</section>
	)
}


export default Testimonials
