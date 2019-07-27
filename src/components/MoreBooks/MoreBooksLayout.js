import React from "react";
import styled from "styled-components";
import { COLOR_10 } from "../../utils/colors";
import GridItem from "../Grid/GridItem";
import Button from "../shared/Button";
import Heading from "../shared/Heading";

const MoreBooksLayoutContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${COLOR_10};
	padding: 80px 0;
`;

const GridListContainer = styled.div`
	display: flex;
	flex-direction: row;
	max-width: 70%;
	flex-wrap: wrap;
	justify-content: center;
	margin: 25px 0;
`;

export default ({ books }) => {
	return (
		<MoreBooksLayoutContainer>
			<Heading>More Books</Heading>
			<GridListContainer>
				{books &&
					books.map((item, index) => (
						<GridItem
							key={`${index}-${item.title}`}
							title={item.title}
							description={`${item.chaptersAmount} chapters`}
							number={item.randomNumber}
							onFirstButtonClick={() => {}}
							onSecondButtonClick={() => {}}
						/>
					))}
			</GridListContainer>
			<Button>View All Books</Button>
		</MoreBooksLayoutContainer>
	);
};
