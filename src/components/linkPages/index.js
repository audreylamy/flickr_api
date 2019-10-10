import React from "react"
import { withRouter } from 'react-router'
import styled from 'styled-components'
import { WithPhotosHoc } from "../../hoc/photosHOC"

export const WrapperButton = styled.div`
	margin: 10px 4px 4px 4px;
`

export const Button = styled.button`
	margin: 5px 10px 5px 10px;
	border: 1px solid white;
	background-color: #41B3A3;
	opacity: .7;
`

export const WrapperText = styled.p`
	margin: 5px 10px 5px 10px;
	color: white;
	font-size: 1.05rem;
	letter-spacing: 3px;
`

const LinkPages = ({context: { setTag }, history}) => {

	const sendTag = (ev, tag) => {
		ev.preventDefault()
		console.log(tag)
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