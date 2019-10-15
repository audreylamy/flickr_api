import React        		from "react";
import { PhotosContext } 	from '../context/tagsContext';

export const WithPhotosHoc = (Component) => {
    return(
		(props) => {
			return (
				<PhotosContext.Consumer>
					{context => <Component {...props} context={context} />}
				</PhotosContext.Consumer>
			);
		}
	)
}