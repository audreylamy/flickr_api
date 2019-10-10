import React from "react"
import { Img } from "./style"

const Images = ({photo}) => {

	const [mouseEnter, setMouseEnter] = React.useState(false)

	return (
		<Img 
			src={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg'} 
			alt="Logo"
			onMouseEnter={() => setMouseEnter(true)}
            onMouseLeave={() => setMouseEnter(false)}
            mouseEnter={mouseEnter}
		>
		</Img>
	)
}

export default Images