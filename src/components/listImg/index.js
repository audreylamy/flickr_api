import React from "react"
import {WrapperImg, Img} from "./style"
import { WithPhotosHoc } from "../../hoc/photosHOC"

const ListImg = ({ context }) => {

	const [allPhotos, setAllPhotos] = React.useState([])

	React.useEffect(() => {
		setAllImages()
	  },[]);

	const setAllImages = async () => {
		console.log("context", context)
		console.log(context.tag)
		const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=57f198356d2cef9345235fe1865b7da2&tags=' + context.tag + '&format=json&nojsoncallback=true'
		await fetch(url)
		.then(response => response.json())
		.then(data => setAllPhotos(data.photos.photo));
	}

		if (allPhotos.length > 0) {
			return (
				<WrapperImg>
					{
						allPhotos.map((photo, i) => {
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