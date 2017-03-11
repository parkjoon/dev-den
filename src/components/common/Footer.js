import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="container">
					<div className="row">
						<div className="col-md-12 center">
							<p>2017 © Dev Den - Copyright All Rights Reserved</p>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}
