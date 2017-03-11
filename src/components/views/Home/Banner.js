import React, { Component } from 'react';
import Parallax from 'react-simple-parallax';

// /styles/img/devden/test-1.jpg

export default class Banner extends Component {
	render() {
		const background = {
			height: '1000px',
			backgroundImage: 'url(/styles/img/devden/web-development-1.jpg)'
		};

		return (
			<div className="slider-container rev_slider_wrapper" style={{height: '760px'}}>
				<div id="revolutionSlider" className="slider rev_slider" data-plugin-revolution-slider data-plugin-options="{'delay': 9000, 'gridwidth': 800, 'gridheight': 760}">
					<ul>
						<li data-transition="fade">
							<img src="/styles/img/devden/web-development-1.jpg"
								alt=""
								data-bgposition="center center"
								data-bgfit="cover"
								data-bgrepeat="no-repeat"
								className="rev-slidebg" />

							<div className="tp-caption"
								data-x="center" data-hoffset="-150"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: '5'}}
								data-transform_in="x:[-300%];opacity:0;s:500;"><img src="/styles/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption top-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-95"
								data-start="500"
								style={{zIndex: '5'}}
								data-transform_in="y:[-300%];opacity:0;s:500;">DO YOU NEED A NEW</div>

							<div className="tp-caption"
								data-x="center" data-hoffset="150"
								data-y="center" data-voffset="-95"
								data-start="1000"
								style={{zIndex: '5'}}
								data-transform_in="x:[300%];opacity:0;s:500;"><img src="/styles/img/slides/slide-title-border.png" alt="" /></div>

							<div className="tp-caption main-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="-45"
								data-start="1500"
								data-whitespace="nowrap"
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;"
								style={{zIndex: '5'}}
								data-mask_in="x:0px;y:0px;">WEB DESIGN?</div>

							<div className="tp-caption bottom-label"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="5"
								data-start="2000"
								style={{zIndex: '5'}}
								data-transform_in="y:[100%];opacity:0;s:500;">Check out our options and features.</div>

							<a className="tp-caption btn btn-lg btn-primary btn-slider-action"
								data-hash
								data-hash-offset="85"
								href="#home-intro"
								data-x="center" data-hoffset="0"
								data-y="center" data-voffset="80"
								data-start="2200"
								data-whitespace="nowrap"
								data-transform_in="y:[100%];s:500;"
								data-transform_out="opacity:0;s:500;"
								style={{zIndex: '5'}}
								data-mask_in="x:0px;y:0px;">Get Started Now!</a>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
