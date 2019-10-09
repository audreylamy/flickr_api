import React, { useState, useEffect }   from "react"
import {WrapperImg, Img} from "./listImg/style"

class Cat extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			allPhotos: [],
		};
	}

	async componentDidMount() {
		const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=57f198356d2cef9345235fe1865b7da2&tags=all&format=json&nojsoncallback=true'
		console.log(url)
		await fetch(url)
		.then(response => response.json())
		.then(data => this.setState({ allPhotos : data.photos.photo}));
	}

	render() {
		if (this.state.allPhotos.length > 0) {
			return (
				<WrapperImg>
					{
						this.state.allPhotos.map((photo, i) => {
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
}

export default Cat