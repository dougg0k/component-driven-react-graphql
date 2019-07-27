import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_0, COLOR_11, COLOR_20, COLOR_7 } from "../../utils/colors";
import Heading from "../shared/Heading";
import ShoppingPurseIcon from "../shared/icons/ShoppingPurseIcon";
import Number from "../shared/Number";

const Item = styled.div`
	display: flex;
	width: 366px;
	height: 170px;
	background-color: ${COLOR_0};
	border-radius: 10px;
	border: 2px solid ${COLOR_7};
	margin: 15px;
	padding: 20px;
	box-sizing: border-box;
	flex-direction: column;
`;

const AfterHeading = styled.span`
	font-weight: 300;
	color: ${COLOR_20};
`;

const TopContainer = styled.div`
	width: 70%;
`;

const ItemBottomContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-top: auto;
`;

const GridButton = styled.button`
	background: none;
	border: none;
	color: ${COLOR_11};
	text-decoration: underline;
	font-size: 0.95em;
	font-weight: 600;
	font-family: "Muli";
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	margin-left: 10px;
	display: flex;
	align-items: center;
	flex-direction: row;
`;

const ButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
`;

const TextContainer = styled.span`
	margin-left: 5px;
`;

export default ({
	title,
	description,
	number,
	onFirstButtonClick,
	onSecondButtonClick
}) => {
	const [isFirstButtonVisible, setFirstButtonVisibility] = useState(false);
	return (
		<Item
			onMouseEnter={() => setFirstButtonVisibility(true)}
			onMouseLeave={() => setFirstButtonVisibility(false)}
		>
			<TopContainer>
				<Heading size="1.4em">{title}</Heading>
				<AfterHeading>{description}</AfterHeading>
			</TopContainer>
			<ItemBottomContainer>
				<Number weight={600} size="1em">
					{number}
				</Number>
				<ButtonsContainer>
					{isFirstButtonVisible && (
						<GridButton onClick={onFirstButtonClick}>
							<ShoppingPurseIcon fillColor={COLOR_11} />
							<TextContainer>Add</TextContainer>
						</GridButton>
					)}
					<GridButton onClick={onSecondButtonClick}>View Details</GridButton>
				</ButtonsContainer>
			</ItemBottomContainer>
		</Item>
	);
};
