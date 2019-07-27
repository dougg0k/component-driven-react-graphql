import React from "react";
import styled from "styled-components";
import { COLOR_11, COLOR_13 } from "../../utils/colors";

const Counter = styled.div`
	background-color: ${COLOR_13};
	padding: 12px;
	color: ${COLOR_11};
	font-weight: 600;
	font-size: 1.1em;
	display: flex;
	align-items: center;
	${({ hasLeftRadius }) =>
		hasLeftRadius &&
		`
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	`}
	${({ hasRightRadius }) =>
		hasRightRadius &&
		`	
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	`};
`;

export default ({ children, hasLeftRadius, hasRightRadius }) => {
	return (
		<Counter hasLeftRadius={hasLeftRadius} hasRightRadius={hasRightRadius}>
			{children}
		</Counter>
	);
};
