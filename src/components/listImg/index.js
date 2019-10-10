import React from "react"
import { WrapperImg } from "./style"
import Images from "../images/index"
import { WithPhotosHoc } from "../../hoc/photosHOC"
import { withRouter } from 'react-router'
import { WrapperText } from "../linkPages/style";

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
				<React.Fragment>
					<WrapperText>
						{
							context.tag !== "all" ? context.tag + " gifs" : null
						}
					</WrapperText>
					<WrapperImg>
						{
							allPhotos.map((photo, i) => {
								return (
									<Images key={i} photo={photo}/>
								)	
							})
						}
					</WrapperImg>
				</React.Fragment>
			)
		} else {
			return (
				<div>Loading</div>
			)
		}
}


export default withRouter(WithPhotosHoc(ListImg))