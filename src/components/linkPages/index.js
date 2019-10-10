import React from "react"
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
			<Button onClick={ev => sendTag(ev, "cat")}><WrapperText>Cats</WrapperText></Button>
			<Button onClick={ev => sendTag(ev, "dog")}><WrapperText>Dogs</WrapperText></Button>
			<Button onClick={ev => sendTag(ev, "bird")}><WrapperText>Birds</WrapperText></Button>
		</WrapperButton>
	)
}

export default withRouter(WithPhotosHoc(LinkPages))