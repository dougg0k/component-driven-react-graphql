import React from "react";
import styled from "styled-components";

const Parapraph = styled.p`
	margin: 0;
	max-width: 665px;
	font-size: 1.25em;
	font-weight: 300;
	line-height: 1.65;
	margin-top: 10px;
	word-wrap: break-word;
`;

export default ({ children }) => {
	return <Parapraph>{children}</Parapraph>;
};
