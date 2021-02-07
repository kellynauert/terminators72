import React, { useEffect, useState } from 'react';
import {
	Button,
	Card,
	CardText,
	CardBody,
	CardTitle,
	CardImg,
	Collapse,
	Row,
	Col,
} from 'reactstrap';

const JobsDisplay = (props) => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Row className='Job-Card' noGutters='true'>
			<Col sm='8'>
				<div>
					<div className='card-title2'>{props.jobs.title}</div>
				</div>
				<div>
					<div className='card-text2'>{`${props.jobs.company}–${props.jobs.type}`}</div>
				</div>
				<div className='text-toggle' onClick={toggle}>
					View Description +
				</div>
			</Col>
			<Col sm='4' className='Job-Button'>
				<Button
					color='primary'
					href={props.jobs.url}
					target='_blank'
					className='w-100'
				>
					View on GitHub
				</Button>
			</Col>
			<Col sm='12'>
				<Collapse isOpen={isOpen}>
					<hr />
					<div
						className='content'
						dangerouslySetInnerHTML={{ __html: props.jobs.description }}
					></div>
				</Collapse>
			</Col>
		</Row>
	);
};

export default JobsDisplay;
