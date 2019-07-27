import React, { Component } from "react";
import styled from "styled-components";
import BookListContainer from "../BookListContainer";
import HeaderContainer from "../HeaderContainer";
import OrderContainer from "../OrderContainer";
import RecommendationsContainer from "../RecommendationsContainer";

const Order = styled.div`
	margin-top: 17px;
`;
const Recommendations = styled.div`
	margin-top: 270px;
	@media (max-width: 1020px) {
		margin-top: 10%;
	}
	@media (max-width: 1170px) {
		margin-top: 5%;
	}
`;
const BookList = styled.div`
	margin-top: 50px;
	@media (max-width: 1020px) {
		margin-top: 10%;
	}
`;

class FrontPageContainer extends Component {
	render() {
		return (
			<div>
				<HeaderContainer />
				<Order>
					<OrderContainer />
				</Order>
				<Recommendations>
					<RecommendationsContainer />
				</Recommendations>
				<BookList>
					<BookListContainer />
				</BookList>
			</div>
		);
	}
}

export default FrontPageContainer;
