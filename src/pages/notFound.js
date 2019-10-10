import React from 'react'
import styled from 'styled-components';

export const WrapperNotFound = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const WrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

class NotFound extends React.Component {

	render() {
		return (
			<WrapperContainer>
				<WrapperNotFound>
					ERROR 404
				</WrapperNotFound>
			</WrapperContainer>
		);
	}
	
  }
  
  export default NotFound;
  