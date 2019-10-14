import React, {useState, useEffect} from "react"
import PropTypes from 'prop-types';
import { WrapperImg, Image } from "./style"
import Images from "../images/index"
import { WithPhotosHoc } from "../../hoc/photosHOC"
import { withRouter } from 'react-router'
import { WrapperText } from "../linkPages/style";
import Spinner from "../../images/spinner.png"

const API_KEY = process.env.REACT_APP_API_KEY

const ListImg = ({ context, history }) => {

	const [allPhotos, setAllPhotos] = useState([])
	const [loader, setLoader] = useState(true)

	useEffect(() => {
		setAllPhotos([])
		setLoader(true)
		if (history.location.pathname.toLowerCase() === "/cats" || "/dogs" || "/birds") {
			let path = history.location.pathname.split('/')
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
			updateAllImages(path[1].toLowerCase())
		}
	  }, [context.tag, history]); // Only re-run the effect if context.tag changes

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
				<div>
					<Image alt="loader" src={Spinner} />
				</div>
			)
		}
		else {
			return (
				<div>No results Found</div>
			)
		}
}

ListImg.propTypes = {
	context: PropTypes.object
};

export default withRouter(WithPhotosHoc(ListImg))