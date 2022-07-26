import React from 'react';
import './MainCss.css';
import MainImgs from '../../images/person.svg';

function Main() {
	return (
		<div className="Main">
			<div className="Container">
				<div className="box">
					<div className="MainImg">
						<img src={MainImgs} alt="logo" />
					</div>

					<div className="MainText">
						<span>تعلم تخصص</span>
						<span>بمستوى جامعي</span>
						<span>متاح للجميع بالمجان</span>
					</div>
				</div>
				<div className="shopIcon" />
			</div>
		</div>
	);
}

export default Main;
