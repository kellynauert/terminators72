import React, { useState } from 'react';
import { Button, Collapse, Row, Col } from 'reactstrap';

const RestaurantsDisplay = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Row className='Job-Card'>
			<Col sm='8'>
				<div>
					<div className='card-title2'>{props.restaurants}</div>
				</div>
				<div>
				{/*}	<div className='card-text2'>{`${props.restaurants.url}–${props.restaurants.thumb}`}</div> */}
				</div>
				<div className='text-toggle' onClick={toggle}>
					View Description
				</div>
			</Col>
			<Col sm='4' className='Restaurant-Button'>
				<Button
					color='primary'
					href={props.link}
					target='_blank'
					className='w-100'
				>
					View on Zomato
				</Button>
			</Col>
			<Col sm='12'>
				<Collapse isOpen={isOpen}>
					<hr />
					<div
						className='content'
						//dangerouslySetInnerHTML={{ __html: props.restaurant.review.review_text }}
					></div>
				</Collapse>
			</Col>
		</Row>
	);
};

export default RestaurantsDisplay;
