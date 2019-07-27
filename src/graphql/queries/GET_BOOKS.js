import { gql } from "apollo-boost";

export default gql`
	query GetBooks {
		books @client {
			title
			chaptersAmount
			randomNumber
		}
	}
`;
