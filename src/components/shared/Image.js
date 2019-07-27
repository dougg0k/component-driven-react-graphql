import React from "react";
import styled from "styled-components";

const Image = styled.img`
	max-width: 100%;
	max-height: 100%;
`;

export default props => {
	return <Image src={props.src} />;
};
