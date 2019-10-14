import React, { useState } from "react"
import PropTypes from 'prop-types';
import { Img } from "./style"

const Images = ({photo}) => {

	const [mouseEnter, setMouseEnter] = useState(false)

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

Images.propTypes = {
	photo: PropTypes.object
};

export default Images