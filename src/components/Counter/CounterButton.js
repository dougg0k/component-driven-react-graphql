import React from "react";
import styled from "styled-components";
import { COLOR_11, COLOR_13 } from "../../utils/colors";

const CounterButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	background-color: ${COLOR_13};
	padding: 0 12px;
	color: ${COLOR_11};
	display: flex;
	${({ hasLeftRadius }) =>
		hasLeftRadius &&
		`
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
		margin-right: 2px;
	`}
	${({ hasRightRadius }) =>
		hasRightRadius &&
		`	
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		margin-left: 2px;
	`};
	&:focus {
		outline: 0;
	}
`;

export default ({ children, onClick, hasLeftRadius, hasRightRadius }) => (
	<CounterButton
		onClick={onClick}
		hasLeftRadius={hasLeftRadius}
		hasRightRadius={hasRightRadius}
	>
		{children}
	</CounterButton>
);
