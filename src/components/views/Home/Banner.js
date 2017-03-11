import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<div className="slider-container rev_slider_wrapper" style={{height: '100%'}}>
				<div id="revolutionSlider" className="slider rev_slider manual">
					<ul>
						<li data-transition="fade">
							<img src="/styles/img/demos/business-consulting/slides/slide-1.jpg"
								alt=""
								data-bgposition="center center"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								data-bgparallax="1"
								className="rev-slidebg" />

							<h1 className="tp-caption custom-secondary-font font-weight-bold text-color-light"
								data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']"
								data-y="center" data-voffset="['-80','-80','-80','-40']"
								data-start="800"
								data-transform_in="y:[-300%];opacity:0;s:500;" style={{fontSize: '32px'}}>Solutions for</h1>

							<div className="tp-caption custom-secondary-font font-weight-bold text-color-light"
								data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']"
								data-y="center" data-voffset="['-42','-42','-42','2']"
								data-start="800"
								data-transform_in="y:[-300%];opacity:0;s:500;" style={{fontSize: '42px'}}>Pro Business Plan</div>

							<a href="#about-us" className="btn btn-primary tp-caption text-uppercase text-color-light custom-border-radius"
								data-hash
								data-hash-offset="85"
								data-x="['left','left','left','left']" data-hoffset="['30','30','30','30']"
								data-y="center" data-voffset="['60','60','60','100']"
								data-start="1500"
								style={{fontSize: '12px', padding: '15px 6px'}}
								data-transform_in="y:[-300%];opacity:0;s:500;">Get Started</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
