import { gql } from "apollo-boost";

export default gql`
	query GetSelectedBook {
		selectedBook @client {
			title
			description
			publisher
			paperback
			language
			isbn10
			isbn13
			randomNumber
		}
	}
`;
