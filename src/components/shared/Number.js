import React from "react";
import styled from "styled-components";
import { COLOR_6 } from "../../utils/colors";

const Number = styled.span`
	font-weight: ${props => props.weight || 700};
	color: ${COLOR_6};
	font-size: ${props => props.size || "1.2em"};
`;

export default ({ children, size, weight }) => (
	<Number size={size} weight={weight}>
		{children}
	</Number>
);
