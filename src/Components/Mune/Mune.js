import React from 'react';
import './MuneCss.css';
import MyLogo from '../../images/LOGO.svg';
function Mune() {
	return (
		<div className="Mune">
			<div className="Container">
                <div className='box'>
                <div className="logo">
					<img src={MyLogo} alt="logo" />
				</div>
				<div className="list">
					<ul>
						<li>الصفحة الرئيسية</li>
						<li>من نحن</li>
						<li>ماذا نقدم</li>
						<li>المسارات</li>
						<li>أعمالنا</li>
						<li>فريقنا</li>
					</ul>
				</div>
				<div className="icon">
					<a className="btn" herf="#">
						انضم لنا
					</a>
				</div>
                </div>
			</div>
		</div>
	);
}

export default Mune;
