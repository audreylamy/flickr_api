import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import { WrapperImg } from "./style"
import Images from "../images/index"
import { WithPhotosHoc } from "../../hoc/photosHOC"
import { withRouter } from 'react-router'
import { WrapperText } from "../linkPages/style";

const API_KEY = process.env.REACT_APP_API_KEY

const ListImg = ({ context, history }) => {

	const [allPhotos, setAllPhotos] = useState([])
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		if (history.location.pathname.toLowerCase() === "/cat" || "/dog" || "/bird") {
			let path = history.location.pathname.split('/')
			updateAllImages(path[1].toLowerCase())
		}
	  }, [context.tag]); // Only re-run the effect if context.tag changes

	const updateAllImages = async (tag) => {
		var url;
		if (history.location.pathname === "/" && context.tag === 'all')
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=all&format=json&nojsoncallback=true'
		else if (history.location.pathname !== "/" && tag)
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + tag + '&format=json&nojsoncallback=true'
		else
			url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + API_KEY + '&tags=' + context.tag + '&format=json&nojsoncallback=true'
		await fetch(url)
		.then(response => response.json())
		.then(data => {setAllPhotos(data.photos.photo); setLoader(false)})
		.catch(error => console.log(error))
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
		} 
		else if (loader) {
			return (
				<div>Loading</div>
			)
		}
		else {
			return (
				<div>Not Found</div>
			)
		}
}

ListImg.propTypes = {
	context: PropTypes.object
};

export default withRouter(WithPhotosHoc(ListImg))