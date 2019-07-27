import React from "react";

const Heading = props => {
	const { children, hNumber, size } = props;
	const HeadingEl = () =>
		React.createElement(
			`h${hNumber}`,
			{
				style: {
					fontFamily: "Lora, serif",
					fontSize: size,
					fontWeight: 500,
					margin: 0
				}
			},
			children
		);
	return <HeadingEl />;
};

Heading.defaultProps = {
	hNumber: 1
};

export default Heading;
