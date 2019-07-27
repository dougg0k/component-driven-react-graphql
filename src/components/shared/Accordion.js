import React from "react";
import styled from "styled-components";
import { COLOR_11 } from "../../utils/colors";
import PlusIcon from "../shared/icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

const AccordionContainer = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 470px;
	width: 470px;
	position: relative;
	@media (max-width: 580px) {
		width: 100%;
	}
`;

const AccordionButton = styled.button`
	background: none;
	border: none;
	display: flex;
	justify-content: space-between;
	font-size: 1.2em;
	font-weight: 600;
	font-family: "Muli";
	padding: 0;
	margin-bottom: 3px;
	cursor: pointer;
	&:focus {
		outline: 0;
	}
	@media (max-width: 580px) {
		font-size: 0.9em;
		width: 100%;
	}
`;

const AccordionDescription = styled.span`
	font-weight: 300;
	font-size: 1.2em;
	@media (max-width: 580px) {
		font-size: 0.9em;
	}
`;

export default ({ title, description, isOpen, onSelected }) => {
	return (
		<AccordionContainer>
			<AccordionButton onClick={() => onSelected(isOpen)}>
				{title}
				{isOpen ? (
					<MinusIcon fillColor={COLOR_11} />
				) : (
					<PlusIcon fillColor={COLOR_11} />
				)}
			</AccordionButton>
			{isOpen && (
				<div>
					<AccordionDescription>{description}</AccordionDescription>
				</div>
			)}
		</AccordionContainer>
	);
};
