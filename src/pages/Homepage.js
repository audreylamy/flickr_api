import React, { useEffect, useState }  from 'react'
import ListImg  from "../components/listImg"
import SearchBar from '../components/searchBar';
import OtherPages from '../components/otherPages';
import styled from 'styled-components';
import PhotosProvider   from  "./photosContext"

export const WrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

class Homepage extends React.Component {

	render() {
		return (
			<WrapperContainer>
				<PhotosProvider>
					<SearchBar />
					<OtherPages />
					<ListImg />
				</PhotosProvider>
			</WrapperContainer>
		);
	}
	
  }
  
  export default Homepage;
  