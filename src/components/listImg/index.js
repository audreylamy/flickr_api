import React from "react"
import {WrapperImg, Img} from "./style"
import { WithPhotosHoc } from "../../hoc/photosHOC"

const ListImg = ({ context }) => {

	console.log("CONTEXT", context)
		if (context.allPhotos.length > 0) {
			return (
				<WrapperImg>
					{
						context.allPhotos.map((photo, i) => {
							return <Img key={i} src={'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '_m.jpg'} alt="Logo"></Img>;
						})
					}
				</WrapperImg>
			)
		} else {
			return (
				<div>Loading</div>
			)
		}
}


export default WithPhotosHoc(ListImg)