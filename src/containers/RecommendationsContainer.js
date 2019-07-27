import React, { Component } from "react";
import { Query } from "react-apollo";
import styled from "styled-components";
import AccordionPointsLayout from "../components/AccordionPoints/AccordionPointsLayout";
import Image from "../components/shared/Image";
import GET_SELECTED_BOOK_RECOMMENDATIONS from "../graphql/queries/GET_SELECTED_BOOK_RECOMMENDATIONS";
import { COLOR_7 } from "../utils/colors";

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
`;

const ImgAllocationSpace = styled.div`
	width: 570px;
	height: 370px;
	background-color: ${COLOR_7};
	@media (max-width: 580px) {
		width: 100%;
	}
`;

class RecommendationsContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedImg: null
		};
	}

	recommendationSelected = recommendation =>
		this.setState({ selectedImg: recommendation.image });

	render() {
		const { selectedImg } = this.state;
		return (
			<Query query={GET_SELECTED_BOOK_RECOMMENDATIONS}>
				{({ data }) => {
					return (
						<Container>
							<>
								<AccordionPointsLayout
									list={data.selectedBook.recommendations}
									onSelect={this.recommendationSelected}
								/>
							</>
							<ImgAllocationSpace>
								{selectedImg && <Image src={selectedImg} />}
							</ImgAllocationSpace>
						</Container>
					);
				}}
			</Query>
		);
	}
}

export default RecommendationsContainer;
