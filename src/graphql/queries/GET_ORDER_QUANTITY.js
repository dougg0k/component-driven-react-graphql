import { gql } from "apollo-boost";

export default gql`
	query GetOrderQuantity {
		orderQuantity @client
	}
`;
