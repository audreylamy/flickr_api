import React from "react"
import PropTypes from 'prop-types';
import { withRouter } from 'react-router'
import { WrapperButton, Button, WrapperText } from "./style"
import { WithPhotosHoc } from "../../hoc/photosHOC"

const LinkPages = ({context: { setTag }, history}) => {

	const sendTag = (ev, tag) => {
		ev.preventDefault()
		setTag(tag)
		history.push('/'+ tag);
	}

	return (
		<WrapperButton>
			<Button onClick={ev => sendTag(ev, "cats")}><WrapperText>Cats</WrapperText></Button>
			<Button onClick={ev => sendTag(ev, "dogs")}><WrapperText>Dogs</WrapperText></Button>
			<Button onClick={ev => sendTag(ev, "birds")}><WrapperText>Birds</WrapperText></Button>
		</WrapperButton>
	)
}

LinkPages.propTypes = {
	setTag: PropTypes.func
};

export default withRouter(WithPhotosHoc(LinkPages))