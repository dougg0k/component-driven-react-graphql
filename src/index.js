import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import client from "./graphql/client";
import { Routes } from "./Routes";

const GlobalStyle = createGlobalStyle`
  body {
		font-family: 'Muli', sans-serif;
		margin: 0;
  }
`;

ReactDOM.render(
	<ApolloProvider client={client}>
		<GlobalStyle />
		<Routes />
	</ApolloProvider>,
	document.getElementById("root")
);
