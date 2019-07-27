import React from "react";
import styled from "styled-components";
import { COLOR_7 } from "../../utils/colors";

const Divider = styled.hr`
	width: ${props => props.width || "100%"};
	height: 2px;
	border: none;
	background-color: ${COLOR_7};
`;

export default ({ width }) => <Divider width={width} />;
