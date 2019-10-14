import styled from 'styled-components';
import { rotateLoader }  from "../../styles/animations"

export const WrapperImg = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80%;
`

export const Image = styled.img`
	margin: 20px;
	max-width: 20px;
	max-height: 20px;
	animation: ${rotateLoader} 1s linear infinite;
`