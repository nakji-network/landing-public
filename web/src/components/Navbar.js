import React from "react"
import images from "../images/images"

const Navbar = ({ data }) => {
    return (
        <header className="py-11 relative z-10">
            <div className="container mx-auto px-4">
                <div className="flex items-center">
                    <a href="#"><img src={images.logo} alt=""/></a>
                    <ul className="flex ml-auto">
                        {
                            data.map((item, i) => 
                                <li key={i} className="pl-9"><a href={item.url} className="font-ArcoSemi text-sm text-white transition-all duration-100 hover:text-yellow-500">{item.name}</a></li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Navbar
