import styled from 'styled-components';

export const WrapperButton = styled.div`
	margin: 10px 4px 4px 4px;
`

export const Button = styled.button`
	margin: 5px 10px 5px 10px;
	border: 1px solid white;
	background-color: #41B3A3;
	opacity: .7;
	outline: none;

	&:hover {
		background-color: palevioletred;
		color: white;
		transition: all .6s ease-out;
	}
`

export const WrapperText = styled.p`
	margin: 5px 10px 5px 10px;
	color: white;
	font-size: 1.05rem;
	letter-spacing: 3px;
`