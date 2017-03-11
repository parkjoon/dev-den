import React, { Component } from 'react';
import { Link } from 'react-router';

import Banner from './Banner';

export default class Home extends Component {
	render() {
		return (
			<div role="main" className="main">
				<Banner />

				<section className="looking-for custom-position-1">
					<div className="container custom-md-border-top">
						<div className="row">
							<div className="col-sm-6 col-md-8">
								<div className="looking-for-box">
									<h2>- <span className="text-lg custom-secondary-font">Are you looking for a</span><br />
									Business Plan Consultant?</h2>
									<p>Schedule your company strategy right session now</p>
								</div>
							</div>
							<div className="col-sm-3 col-md-2">
								<a className="text-decoration-none" href="tel:+00112304567" target="_blank" title="Call Us Now">
									<span className="custom-call-to-action mt-xlg">
										<span className="action-title text-color-primary">Call Us Now</span>
										<span className="action-info text-color-light">+001 1230 4567</span>
									</span>
								</a>
							</div>
							<div className="col-sm-3 col-md-2">
								<a className="text-decoration-none" href="mail:mail@example.com" target="_blank" title="Email Us Now">
									<span className="custom-call-to-action mt-xlg">
										<span className="action-title text-color-primary">Email Us Now</span>
										<span className="action-info text-color-light">mail@example.com</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="about-us custom-section-padding" id="about-us">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md-6">
								<h2 className="font-weight-bold text-color-dark">- About Us</h2>
								<p className="pl-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae.</p>
								<div className="col-md-6">
									<ul className="list list-icons list-icons-style-3 list-tertiary">
										<li><i className="fa fa-chevron-right"></i> Certified Professionals</li>
										<li><i className="fa fa-chevron-right"></i> Former Chief Executives</li>
										<li><i className="fa fa-chevron-right"></i> Real Estate Professionals</li>
									</ul>
								</div>
								<div className="col-md-6">
									<ul className="list list-icons list-icons-style-3 list-tertiary">
										<li><i className="fa fa-chevron-right"></i> Nobel Laureate Economists</li>
										<li><i className="fa fa-chevron-right"></i> Former Political Leaders</li>
										<li><i className="fa fa-chevron-right"></i> Chartered Financial Analysts</li>
									</ul>
								</div>
								<a className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase" href="demo-business-consulting-about-us.html">Read More</a>
							</div>
							<div className="col-sm-6 col-md-6">
								<div className="content-grid custom-content-grid mt-xlg mb-lg">
									<div className="row content-grid-row">
										<div className="content-grid-item col-md-6 background-color-light">
											<div className="counters">
												<div className="counter custom-sm-counter-style">
													<img className="counter-icon" src="/styles/img/demos/business-consulting/icons/icon-1.png" alt />
													<strong className="text-color-primary custom-primary-font" data-to="15" data-append="+">0</strong>
													<label>Years in Business</label>
												</div>
											</div>
										</div>
										<div className="content-grid-item col-md-6">
											<div className="counters">
												<div className="counter margin-style-2 custom-sm-counter-style">
													<img className="counter-icon" src="/styles/img/demos/business-consulting/icons/icon-2.png" alt />
													<strong className="text-color-primary custom-primary-font" data-to="2000" data-append="+">0</strong>
													<label>Successfull Cases</label>
												</div>
											</div>
										</div>
									</div>
									<div className="row content-grid-row">
										<div className="content-grid-item col-md-6">
											<div className="counters">
												<div className="counter custom-sm-counter-style">
													<img className="counter-icon" src="/styles/img/demos/business-consulting/icons/icon-3.png" alt />
													<strong className="text-color-primary custom-primary-font" data-to="240" data-append="+">0</strong>
													<label>Satisfied Clients</label>
												</div>
											</div>
										</div>
										<div className="content-grid-item col-md-6 background-color-light">
											<div className="counters">
												<div className="counter margin-style-2 custom-sm-counter-style">
													<img className="counter-icon" src="/styles/img/demos/business-consulting/icons/icon-4.png" alt />
													<strong className="text-color-primary custom-primary-font" data-to="130" data-append="+">0</strong>
													<label>Pro Consultants</label>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-secondary custom-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="font-weight-bold text-color-dark mb-md">- Expertises</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="0">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-1.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Corporate Finance</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna.</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="100">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-2.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Corporate Restructuring</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna.</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="200">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-3.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Economic Consulting</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna.</p>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="300">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-4.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Litigation Consulting</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna.</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="400">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-5.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Strategic Consulting</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur diam id urna.</p>
										</div>
									</div>
								</a>
							</div>
							<div className="col-md-4">
								<a href="demo-business-consulting-expertise-detail.html" className="text-decoration-none appear-animation" data-appear-animation="fadeInUp" data-appear-animation-delay="500">
									<div className="feature-box custom-feature-box feature-box-style-2">
										<div className="feature-box-icon">
											<img src="/styles/img/demos/business-consulting/expertise/expertise-6.jpg" alt="" />
										</div>
										<div className="feature-box-info ml-md">
											<h4 className="font-weight-normal text-lg">Tech Consulting</h4>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur diam id urna.</p>
										</div>
									</div>
								</a>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 center">
								<a className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase" href="demo-business-consulting-expertise.html" title="View All">View All</a>
							</div>
						</div>
					</div>
				</section>

				<section className="custom-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2 className="font-weight-bold text-color-dark">- Our Strategy</h2>
								<div className="owl-carousel owl-theme nav-bottom rounded-nav numbered-dots pl-xs pr-xs" data-plugin-options="{'items': 1, 'loop': false, 'dots': true, 'nav': false}">
									<div>
										<div className="custom-step-item">
											<span className="step text-uppercase">
												Step
												<span className="step-number text-color-primary">
													01
												</span>
											</span>
											<div className="step-content">
												<h4 className="mb-xlg">The first meeting<br /> <strong>Understanding the Problem</strong></h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae odio.</p>
											</div>
										</div>
									</div>
									<div>
										<div className="custom-step-item">
											<span className="step text-uppercase">
												Step
												<span className="step-number text-color-primary">
													02
												</span>
											</span>
											<div className="step-content">
												<h4 className="mb-xlg">The second meeting<br /> <strong>Business Plan Consultant</strong></h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae odio.</p>
											</div>
										</div>
									</div>
									<div>
										<div className="custom-step-item">
											<span className="step text-uppercase">
												Step
												<span className="step-number text-color-primary">
													03
												</span>
											</span>
											<div className="step-content">
												<h4 className="mb-xlg">The final meeting<br /> <strong>Problem Solved</strong></h4>
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vitae odio.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<h2 className="font-weight-bold text-color-dark">- Frequently asked questions</h2>
								<div className="panel-group without-bg custom-accordion-style-1" id="accordion7">
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion7" href="#collapse7One" aria-expanded="true">
													Praesent sit amet quam a lorem commodo tincidunt.
													<span className="custom-accordion-plus"></span>
												</a>
											</h4>
										</div>
										<div id="collapse7One" className="accordion-body collapse in" aria-expanded="true">
											<div className="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus.</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion7" href="#collapse7Two" aria-expanded="false">
													Integer ac elit id est euismod pellentesque.
													<span className="custom-accordion-plus"></span>
												</a>
											</h4>
										</div>
										<div id="collapse7Two" className="accordion-body collapse" aria-expanded="false" style={{height: '0px'}}>
											<div className="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus.</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion7" href="#collapse7Three" aria-expanded="false">
													Cras interdum neque sit amet justo maximus, ut sollicitudin eros.
													<span className="custom-accordion-plus"></span>
												</a>
											</h4>
										</div>
										<div id="collapse7Three" className="accordion-body collapse" aria-expanded="false" style={{height: '0px'}}>
											<div className="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus.</p>
											</div>
										</div>
									</div>
									<div className="panel panel-default">
										<div className="panel-heading">
											<h4 className="panel-title">
												<a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion7" href="#collapse7Four" aria-expanded="false">
													Pellentesque in ex molestie, convallis nulla ut, ornare erat.
													<span className="custom-accordion-plus"></span>
												</a>
											</h4>
										</div>
										<div id="collapse7Four" className="accordion-body collapse" aria-expanded="false" style={{height: '0px'}}>
											<div className="panel-body">
												<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-secondary custom-section-padding-2">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="font-weight-bold text-color-dark mb-md">- Our Cases</h2>
							</div>
						</div>
					</div>
					<div className="owl-carousel show-nav-title custom-both-sides-shadow custom-dots-position-2 custom-dots-style-1 custom-xs-arrows-style-2" data-plugin-options="{'items': 6, 'loop': false, 'dots': true, 'nav': false}">
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-1.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Corporate Finance</span>
											<span className="custom-thumb-info-desc font-weight-light">Okler</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-2.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Corporate Restructuring</span>
											<span className="custom-thumb-info-desc font-weight-light">Envato</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-3.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Economic Consultanting</span>
											<span className="custom-thumb-info-desc font-weight-light">Porto</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-4.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Tech Consulting</span>
											<span className="custom-thumb-info-desc font-weight-light">GetCustom</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-5.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Strategic</span>
											<span className="custom-thumb-info-desc font-weight-light">Jet Orange</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-1.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Litigation</span>
											<span className="custom-thumb-info-desc font-weight-light">Paradoxx</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-2.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Consulting</span>
											<span className="custom-thumb-info-desc font-weight-light">iMessenger</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-3.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Brand Consulting</span>
											<span className="custom-thumb-info-desc font-weight-light">Theme Forest</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
						<div>
							<a href="demo-business-consulting-cases-detail.html" className="text-decoration-none">
								<span className="thumb-info custom-thumb-info-style-1 thumb-info-hide-wrapper-bg">
									<span className="thumb-info-wrapper m-none">
										<img src="/styles/img/demos/business-consulting/cases/case-4.jpg" className="img-responsive" alt="" />
									</span>
									<span className="thumb-info-caption background-color-secondary p-md pt-xlg pb-xlg">
										<span className="custom-thumb-info-title">
											<span className="custom-thumb-info-name font-weight-semibold text-color-dark text-md">Corporate Consulting</span>
											<span className="custom-thumb-info-desc font-weight-light">Tucson</span>
										</span>
										<span className="custom-arrow"></span>
									</span>
								</span>
							</a>
						</div>
					</div>
				</section>

				<section className="custom-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="font-weight-bold text-color-dark">- Testimonials</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="owl-carousel show-nav-title custom-dots-style-1 custom-dots-position custom-xs-arrows-style-2 mb-none" data-plugin-options="{'items': 1, 'autoHeight': true, 'loop': false, 'nav': false, 'dots': true}">
									<div>
										<div className="col-xs-8 col-sm-4 col-md-2 center pt-xlg">
											<img src="/styles/img/demos/business-consulting/testimonials/testimonial-author-2.jpg" alt className="img-responsive custom-rounded-image" />
										</div>
										<div className="col-xs-12 col-sm-12 col-md-10">
											<div className="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-none">
												<blockquote className="pb-sm">
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex. Aliquam et tortor nisi. Duis mollis diam nec elit volutpat suscipit.</p>
												</blockquote>
												<div className="testimonial-author pull-left">
													<p><strong>John Smith</strong><span className="text-color-primary">CEO &amp; Founder - Okler</span></p>
												</div>
											</div>
										</div>
									</div>
									<div>
										<div className="col-xs-8 col-sm-4 col-md-2 center pt-xlg">
											<img src="/styles/img/demos/business-consulting/testimonials/testimonial-author-3.jpg" alt className="img-responsive custom-rounded-image" />
										</div>
										<div className="col-xs-12 col-sm-12 col-md-10">
											<div className="testimonial custom-testimonial-style-1 testimonial-with-quotes mb-none">
												<blockquote className="pb-sm">
													<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex. Aliquam et tortor nisi. Duis mollis diam nec elit volutpat suscipit.</p>
												</blockquote>
												<div className="testimonial-author pull-left">
													<p><strong>John Smith</strong><span className="text-color-primary">CEO &amp; Founder - Okler</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="section-secondary custom-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="font-weight-bold text-color-dark">- Our Team</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12">
								<div className="owl-carousel show-nav-title custom-dots-style-1 custom-dots-position custom-xs-arrows-style-2 mb-none" data-plugin-options="{'items': 4, 'autoHeight': true, 'loop': false, 'nav': false, 'dots': true}">
									<div>
										<div className="team-item">
											<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
												<span className="image-wrapper">
													<img src="/styles/img/demos/business-consulting/team/team-1.jpg" alt="" className="img-responsive" />
												</span>
											</a>
											<div className="team-infos">
												<div className="share">
													<i className="fa fa-share-alt"></i>
													<div className="share-icons background-color-light">
														<a href="#" className="text-decoration-none" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Instagram"><i className="fa fa-instagram"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Linkedin"><i className="fa fa-linkedin"></i></a>
													</div>
												</div>
												<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
													<span className="team-member-name text-color-dark font-weight-semibold text-md">John Doe</span>
													<span className="team-member-desc font-weight-light">CEO</span>
												</a>
											</div>
										</div>
									</div>
									<div>
										<div className="team-item">
											<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
												<span className="image-wrapper">
													<img src="/styles/img/demos/business-consulting/team/team-2.jpg" alt="" className="img-responsive" />
												</span>
											</a>
											<div className="team-infos">
												<div className="share">
													<i className="fa fa-share-alt"></i>
													<div className="share-icons background-color-light">
														<a href="#" className="text-decoration-none" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Instagram"><i className="fa fa-instagram"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Linkedin"><i className="fa fa-linkedin"></i></a>
													</div>
												</div>
												<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
													<span className="team-member-name text-color-dark font-weight-semibold text-md">Joyce Doe</span>
													<span className="team-member-desc font-weight-light">Finance Expert</span>
												</a>
											</div>
										</div>
									</div>
									<div>
										<div className="team-item">
											<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
												<span className="image-wrapper">
													<img src="/styles/img/demos/business-consulting/team/team-3.jpg" alt="" className="img-responsive" />
												</span>
											</a>
											<div className="team-infos">
												<div className="share">
													<i className="fa fa-share-alt"></i>
													<div className="share-icons background-color-light">
														<a href="#" className="text-decoration-none" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Instagram"><i className="fa fa-instagram"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Linkedin"><i className="fa fa-linkedin"></i></a>
													</div>
												</div>
												<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
													<span className="team-member-name text-color-dark font-weight-semibold text-md">Donald Doe</span>
													<span className="team-member-desc font-weight-light">Manufacturing</span>
												</a>
											</div>
										</div>
									</div>
									<div>
										<div className="team-item">
											<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
												<span className="image-wrapper">
													<img src="/styles/img/demos/business-consulting/team/team-4.jpg" alt="" className="img-responsive" />
												</span>
											</a>
											<div className="team-infos">
												<div className="share">
													<i className="fa fa-share-alt"></i>
													<div className="share-icons background-color-light">
														<a href="#" className="text-decoration-none" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Instagram"><i className="fa fa-instagram"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Linkedin"><i className="fa fa-linkedin"></i></a>
													</div>
												</div>
												<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
													<span className="team-member-name text-color-dark font-weight-semibold text-md">Jerry Doe</span>
													<span className="team-member-desc font-weight-light">Project Manager</span>
												</a>
											</div>
										</div>
									</div>
									<div>
										<div className="team-item">
											<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
												<span className="image-wrapper">
													<img src="/styles/img/demos/business-consulting/team/team-5.jpg" alt="" className="img-responsive" />
												</span>
											</a>
											<div className="team-infos">
												<div className="share">
													<i className="fa fa-share-alt"></i>
													<div className="share-icons background-color-light">
														<a href="#" className="text-decoration-none" title="Share on Facebook"><i className="fa fa-facebook"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Instagram"><i className="fa fa-instagram"></i></a>
														<a href="#" className="text-decoration-none" title="Share on Linkedin"><i className="fa fa-linkedin"></i></a>
													</div>
												</div>
												<a href="demo-business-consulting-team-detail.html" className="text-decoration-none">
													<span className="team-member-name text-color-dark font-weight-semibold text-md">Tom Doe</span>
													<span className="team-member-desc font-weight-light">Business Development</span>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row center mt-xlg">
							<div className="col-md-12">
								<a className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase" href="demo-business-consulting-team.html">View All</a>
							</div>
						</div>
					</div>
				</section>

				<section className="looking-for section-primary">
					<div className="container">
						<div className="row">
							<div className="col-sm-6 col-md-8">
								<div className="looking-for-box">
									<h2>- <span className="text-lg custom-secondary-font">Are you looking for a</span><br />
									Business plan Consultant?</h2>
									<p>Schedule your company strategy right session now</p>
								</div>
							</div>
							<div className="col-sm-3 col-md-2">
								<a className="text-decoration-none" href="tel:+00112304567" target="_blank" title="Call Us Now">
									<span className="custom-call-to-action white-border text-color-light mt-xlg">
										<span className="action-title">Call Us Now</span>
										<span className="action-info">+001 1230 4567</span>
									</span>
								</a>
							</div>
							<div className="col-sm-3 col-md-2">
								<a className="text-decoration-none" href="mail:mail@example.com" target="_blank" title="Email Us Now">
									<span className="custom-call-to-action white-border text-color-light mt-xlg">
										<span className="action-title">Email Us Now</span>
										<span className="action-info">mail@example.com</span>
									</span>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section className="custom-section-padding">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h2 className="font-weight-bold text-color-dark">- Our Blog</h2>
							</div>
						</div>
						<div className="row">
							<article className="blog-post">
								<div className="col-sm-8 col-md-5">
									<div className="blog-post-image-wrapper">
										<img src="/styles/img/demos/business-consulting/blog/blog-1.jpg" alt className="img-responsive mb-lg" />
										<span className="blog-post-date background-color-primary text-color-light font-weight-bold">
											20
											<span className="month-year font-weight-light">
												Oct-16
											</span>
										</span>
									</div>
								</div>
								<div className="col-sm-12 col-md-7">
									<h2> Global Opportunities</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus. Nunc et feugiat arcu, in placerat risus. Phasellus condimentum sapien vi.</p>
									<hr className="solid" />
									<div className="post-infos">
										<span className="info posted-by">
											Posted by:
											<span className="post-author font-weight-semibold text-color-dark">
												John Doe
											</span>
										</span>
										<span className="info comments ml-xlg">
											Comments:
											<span className="comments-number text-color-primary font-weight-semibold">
												15
											</span>
										</span>
										<span className="info like ml-xlg">
											Like:
											<span className="like-number font-weight-semibold custom-color-red">
												38
											</span>
										</span>
									</div>
									<a className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase mt-xlg" href="demo-business-consulting-blog-detail.html" title="Read More">Read More</a>
								</div>
							</article>
						</div>
					</div>
				</section>


				<section className="section section-text-light section-background m-none" style={{background: 'url("/styles/img/demos/business-consulting/contact/contact-background.jpg")', backgroundSize: 'cover'}}>
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<h2 className="font-weight-bold">- Contact Us</h2>
								<p className="custom-opacity-font">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper.</p>
								<div className="col-md-6 pl-none">
									<h4 className="mb-xs">Call Us</h4>
									<a href="tel:+1234567890" className="text-decoration-none" target="_blank" title="Call Us">
										<span className="custom-call-to-action-2 text-color-light text-sm custom-opacity-font">
											Phone
											<span className="info text-lg">
												123-456-7890
											</span>
										</span>
									</a>
								</div>
								<div className="col-md-6 pl-none custom-sm-margin-top">
									<h4 className="mb-xs">Our Location</h4>
									<p className="custom-opacity-font">Porto Business Consulting 123 Porto Blvd, Suite 100 New York, NY</p>
								</div>
								<div className="col-md-6 pl-none">
									<h4 className="mb-xs">Mail Us</h4>
									<a href="mail:mail@example.com" className="text-decoration-none" target="_blank" title="Mail Us">
										<span className="custom-call-to-action-2 text-color-light text-sm custom-opacity-font">
											Email
											<span className="info text-lg">
												mail@example.com
											</span>
										</span>
									</a>
								</div>
								<div className="col-md-6 pl-none custom-sm-margin-top">
									<h4 className="mb-xs">Social Media</h4>
									<ul className="social-icons custom-social-icons-style-1 custom-opacity-font">
										<li className="social-icons-facebook">
											<a href="http://www.facebook.com/" target="_blank" title="Facebook">
												<i className="fa fa-facebook"></i>
											</a>
										</li>
										<li className="social-icons-twitter">
											<a href="http://www.twitter.com/" target="_blank" title="Twitter">
												<i className="fa fa-twitter"></i>
											</a>
										</li>
										<li className="social-icons-instagram">
											<a href="http://www.instagram.com/" target="_blank" title="Instagram">
												<i className="fa fa-instagram"></i>
											</a>
										</li>
										<li className="social-icons-linkedin">
											<a href="http://www.linkedin.com/" target="_blank" title="Linkedin">
												<i className="fa fa-linkedin"></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-6 custom-sm-margin-top">
								<h2 className="font-weight-bold">- Write Us</h2>
								<form id="contactForm" className="custom-contact-form-style-1" action="php/contact-form.php" method="POST">
									<div className="row">
										<div className="form-group">
											<div className="col-md-12">
												<div className="custom-input-box">
													<i className="icon-user icons text-color-primary"></i>
													<input type="text" value="" data-msg-required="Please enter your name." maxLength="100" className="form-control" name="name" id="name" placeholder="Name*" required />
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group">
											<div className="col-md-12">
												<div className="custom-input-box">
													<i className="icon-envelope icons text-color-primary"></i>
													<input type="email" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxLength="100" className="form-control" name="email" id="email" placeholder="Email*" required />
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="form-group">
											<div className="col-md-12">
												<div className="custom-input-box">
													<i className="icon-bubble icons text-color-primary"></i>
													<textarea maxLength="5000" data-msg-required="Please enter your message." rows="10" className="form-control" name="message" id="message" placeholder="Message*" required></textarea>
												</div>
											</div>
										</div>
									</div>
									<div className="row">
										<div className="col-md-12">
											<input type="submit" value="Submit Now" className="btn btn-borders custom-border-width btn-primary custom-border-radius font-weight-semibold text-uppercase" data-loading-text="Loading..." />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			</div>
		);
	}
}
