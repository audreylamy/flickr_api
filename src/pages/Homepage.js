import React from 'react'
import ListImg  from "../components/listImg"
import SearchBar from '../components/searchBar';
import OtherPages from '../components/linkPages';
import styled from 'styled-components';
import GlobalStyles from '../styles/globalStyle';


export const WrapperContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

class Homepage extends React.Component {

	render() {
		return (
			<React.Fragment>
				<GlobalStyles />
				<WrapperContainer>
					<SearchBar />
					<OtherPages />
					<ListImg />
				</WrapperContainer>
			</React.Fragment>
		);
	}
	
  }
  
  export default Homepage;
  