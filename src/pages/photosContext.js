import React, { createContext, Component } from "react";

export const PhotosContext = createContext();

export default class PhotosProvider extends Component {

	constructor(props) {
		super(props);
		this.state = { 
			// setAllPhotos: this.setAllPhotos.bind(this),
			allPhotos: [],
			setTag: this.setTag.bind(this),
			tag: "all"
		};
	}

	componentDidMount() {
		this.setAllImages(this.state.tag)
	}

	setTag(tag) {
		this.setAllImages(tag)
	}
	
	async setAllImages(tag){
		console.log(tag)
		const url = 'https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=57f198356d2cef9345235fe1865b7da2&tags=' + tag + '&format=json&nojsoncallback=true'
		await fetch(url)
		.then(response => response.json())
		.then(data => this.setState({ allPhotos : data.photos.photo}));
	}

	render() {
		return (
        <PhotosContext.Provider value={{...this.state}}>
            {this.props.children}
        </PhotosContext.Provider>
		)
	}
}