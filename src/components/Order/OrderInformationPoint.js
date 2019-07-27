import React from "react";
import styled from "styled-components";
import CheckSymbolIcon from "../shared/icons/CheckSymbolIcon";

const InformationPointContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 7px 0;
`;

const PrefixContainer = styled.span`
	font-weight: 600;
	margin-right: 5px;
`;

const SuffixContainer = styled.span`
	font-weight: 300;
`;

const TextContainer = styled.div`
	max-width: 275px;
	margin-left: 15px;
`;

export default ({ prefix, suffix }) => {
	return (
		<InformationPointContainer>
			<CheckSymbolIcon />
			<TextContainer>
				<PrefixContainer>{prefix}:</PrefixContainer>
				<SuffixContainer>{suffix}</SuffixContainer>
			</TextContainer>
		</InformationPointContainer>
	);
};
