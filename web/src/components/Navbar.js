import React from "react"
import images from "../images/images"

const Navbar = ({ data }) => {
    return (
        <header class="py-11 relative z-10">
            <div class="container mx-auto px-4">
                <div class="flex items-center">
                    <a href="#"><img src={images.logo} alt=""/></a>
                    <ul class="flex ml-auto">
                        {
                            data.map((item, i) => 
                                <li key={i} class="pl-9"><a href={item.url} class="font-ArcoSemi text-sm text-white transition-all duration-100 hover:text-yellow-500">{item.name}</a></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar