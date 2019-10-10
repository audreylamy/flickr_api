import styled from 'styled-components';

export const Img = styled.img`
	margin: 5px;
	width: 23%;
	height: 200px;
	object-fit: cover; 
	transform: ${props => props.mouseEnter ? "scale(1.05)" : null };
	transition: all .3s ease-out;
	opacity: ${props => props.mouseEnter ? "1" : ".7" };
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  	filter: ${props => props.mouseEnter ? "none" : "grayscale(100%)" };
`