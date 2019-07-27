import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import FrontPageContainer from "./containers/MainContainers/FrontPageContainer";

export class Routes extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route path="/" component={FrontPageContainer} />
					<Redirect from="*" to="/" />
				</Switch>
			</BrowserRouter>
		);
	}
}
