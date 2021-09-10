import { useEffect } from "react"

const Script = ({ url }) => {
	useEffect(() => {
		const script = document.createElement('script')

		script.src = url
		script.async = true

		document.body.appendChild(script)

		return () => {
			document.body.removeChild(script)
		}
	}, [url])
	
	return 
}

export default Script