import { gql } from "apollo-boost";

export default gql`
	query GetSelectedBooksRecommendations {
		selectedBook @client {
			recommendations {
				title
				description
				image
			}
		}
	}
`;
