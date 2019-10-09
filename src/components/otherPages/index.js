import React from "react"
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import ListImg from '../listImg'
import styled from 'styled-components'
import { WithPhotosHoc } from "../../hoc/photosHOC"

export const WrapperButton = styled.div`
	margin: 4px;
`

const OtherPages = ({context}) => {

	const sendTag = (ev, tag) => {
		console.log(tag)
		context.setTag(tag)
	}

	return (
		<WrapperButton>
			<button onClick={ev => sendTag(ev, "cats")}><Link to ='/Cat'>Cats</Link></button>
			<button onClick={ev => sendTag(ev, "dogs")}><Link to ='/Dog'>Dogs</Link></button>
			<button onClick={ev => sendTag(ev, "birds")}><Link to ='/Bird'>Birds</Link></button>
		</WrapperButton>
	)
}

export default WithPhotosHoc(OtherPages)