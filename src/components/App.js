import React, { Component } from 'react';

import Footer from './common/Footer';
import Header from './common/Header';

export default class App extends Component {
	render() {
		return (
			<div className="body">
				<Header />
				<div className="main" role="main">
					{React.cloneElement(this.props.children, this.propsToPass)}
				</div>
				<Footer />
			</div>
		);
	}
}
