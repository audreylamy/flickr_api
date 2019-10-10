import React from "react"
import { withRouter } from 'react-router'
import { Link, Redirect } from 'react-router-dom'
import ListImg from '../listImg'
import styled from 'styled-components'
import { WithPhotosHoc } from "../../hoc/photosHOC"

export const WrapperButton = styled.div`
	margin: 4px;
`

const LinkPages = ({context: { setTag }, history}) => {

	const sendTag = (ev, tag) => {
		ev.preventDefault()
		console.log(tag)
		setTag(tag)
		history.push('/cat');
	}

	return (
		<WrapperButton>
			<button onClick={ev => sendTag(ev, "cats")}>Cat</button>
			<button onClick={ev => sendTag(ev, "dogs")}>Dog</button>
			<button onClick={ev => sendTag(ev, "birds")}>Bird</button>
		</WrapperButton>
	)
}

export default withRouter(WithPhotosHoc(LinkPages))