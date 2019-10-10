import React, { createContext, Component } from "react";

export const PhotosContext = createContext();

export default class PhotosProvider extends Component {

	constructor(props) {
		super();
		this.state = { 
			setTag: this.setTag.bind(this),
			tag: "all"
		};
	}

	setTag(data) {
		console.log(data)
		this.setState({ tag: data })
	}

	render() {
		console.log(this.state)
		return (
			<PhotosContext.Provider value={{...this.state}}>
				{this.props.children}
			</PhotosContext.Provider>
		)
	}
}