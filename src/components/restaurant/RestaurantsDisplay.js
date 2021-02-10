import React, { useState } from 'react';
import { Button, Collapse, Row, Col, Card } from 'reactstrap';

const RestaurantsDisplay = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	//console.log(props.restaurant.restaurant.name)
	return (
		<Card>
		<Row className='Restaurant-Card'>
			<Col sm='8'>
				<div>
					<div className='card-title2'>{props.restaurant.restaurant.name}</div>
				</div>
				<div>
					{/* <div className='card-text2'>{`${props.restaurant.restaurant.cuisines}`}</div>*/} </div> 
				<div className='text-toggle' onClick={toggle}>
					{props.restaurant.restaurant.cuisines}
				</div>
			</Col>
			<Col sm='4' className='Restaurant-Button'>
				<Button
					color='primary'
					href={props.restaurant.restaurant.url}
					target='_blank'
					className='w-100'
				>
					View on Zomato
				</Button>
			</Col>
			<Col sm='12'>
				{/* <Collapse isOpen={isOpen}>
					<div
						className='content'
						dangerouslySetInnerHTML={{ __html: props.restaurant.restaurant.cuisine}}>
					</div>
				</Collapse> */}
			</Col>
		</Row>
		</Card>
	);
};

export default RestaurantsDisplay;
