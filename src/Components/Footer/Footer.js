import React from 'react';
import './FooterCss.css';
import face from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import telegram from '../../images/telegram.svg';

function Footer() {
	return (
		<div className="Footer">
			<div className="Container">
				<div className="box">
					<div className="rightEnd">
						<span>
							تواصل معنا 
						</span>
						<span className="socialIcons">
							<img src={telegram} alt="social" />
							<img src={linkedin} alt="social" />
							<img src={face} alt="social" />
						</span>
					</div>
					<div className="leftEnd">
						<span> سياسة الخصوصية</span>
						<span> 2022 TG Developers &copy;</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
