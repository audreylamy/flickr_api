import React from "react"
import {WrapperImg, Img} from "./style"
import { WithPhotosHoc } from "../../hoc/photosHOC"
import { withRouter } from 'react-router'

const ListImg = ({ context, history }) => {

	const [allPhotos, setAllPhotos] = React.useState([])

	React.useEffect(() => {
			setAllImages()
	  }, [context.tag]);

	const setAllImages = async () => {
		var url;
		if (history.location.pathname === "/" && context.tag === 'all')
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ff9cea982e01046ebef0e6040d1f9b05&tags=all&format=json&nojsoncallback=true'
		else if (history.location.pathname !== "/")
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ff9cea982e01046ebef0e6040d1f9b05&tags=' + context.tag + '&format=json&nojsoncallback=true'
		else
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ff9cea982e01046ebef0e6040d1f9b05&tags=' + context.tag + '&format=json&nojsoncallback=true'
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


export default withRouter(WithPhotosHoc(ListImg))