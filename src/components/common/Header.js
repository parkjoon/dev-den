import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
	render() {
		return (
			<header id="header" className="header-narrow header-semi-transparent header-transparent-sticky-deactive custom-header-transparent-bottom-border" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 1, 'stickySetTop': '1'}">
				<div className="header-body">
					<div className="header-container container">
						<div className="header-row">
							<div className="header-column">
								<div className="header-logo">
									<a href="demo-business-consulting.html">
										<img alt="Porto" width="82" height="40" src="/styles/img/logo-default-slim-dark.png" />
									</a>
								</div>
							</div>
							<div className="header-column">
								<div className="header-row">
									<div className="header-nav header-nav-dark-dropdown">
										<button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
											<i className="fa fa-bars"></i>
										</button>
										<div className="header-nav-main header-nav-main-square custom-header-nav-main-effect-1 collapse">
											<nav>
												<ul className="nav nav-pills" id="mainNav">
													<li className="active">
														<a href="demo-business-consulting.html">
															Home
														</a>
													</li>
													<li>
														<a href="demo-business-consulting-about-us.html">
															About Us
														</a>
													</li>
													<li className="dropdown dropdown-primary">
														<a className="dropdown-toggle" href="demo-business-consulting-expertise.html">
															Expertise
														</a>
														<ul className="dropdown-menu">
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Corporate Finance
																</a>
															</li>
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Corporate Restructuring
																</a>
															</li>
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Economic Consulting
																</a>
															</li>
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Litigation Consulting
																</a>
															</li>
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Strategic Consulting
																</a>
															</li>
															<li>
																<a href="demo-business-consulting-expertise-detail.html">
																	Tech Consulting
																</a>
															</li>
														</ul>
													</li>
													<li>
														<a href="demo-business-consulting-cases.html">
															Cases
														</a>
													</li>
													<li>
														<a href="demo-business-consulting-tertimonials.html">
															Testimonials
														</a>
													</li>
													<li>
														<a href="demo-business-consulting-team.html">
															Team
														</a>
													</li>
													<li>
														<a href="demo-business-consulting-blog.html">
															Blog
														</a>
													</li>
													<li>
														<a href="demo-business-consulting-contact-us.html">
															Contact Us
														</a>
													</li>
												</ul>
											</nav>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		);
	}
}
