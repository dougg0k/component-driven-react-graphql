import React, { Component } from "react";
import { Query } from "react-apollo";
import MoreBooksLayout from "../components/MoreBooks/MoreBooksLayout";
import GET_BOOKS from "../graphql/queries/GET_BOOKS";

class BookListContainer extends Component {
	render() {
		return (
			<Query query={GET_BOOKS}>
				{({ data }) => <MoreBooksLayout books={data.books} />}
			</Query>
		);
	}
}

export default BookListContainer;
