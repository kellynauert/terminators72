import React, { useState } from 'react';
import { Container, Col } from 'reactstrap';
import JobsDisplay from './JobsDisplay';
const Jobs = (props) => {
	const lat = props.sessionLatitude;
	const long = props.sessionLongitude;
	const [jobs, setJobs] = useState();

	const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
	const gitJobURL = `https://jobs.github.com/positions.json?lat=${lat}&&long=${long}`;

	if (!jobs && lat && long) {
		fetch(corsURL + gitJobURL)
			.then((res) => res.json())
			.then((json) => {
				setJobs(json);
				console.log(json);
			});
	}
	function displayCards() {
		if (jobs) {
			return jobs.length > 0
				? jobs.slice(0, 4).map((job) => {
						return <JobsDisplay job={job} key={job.id} />;
				  })
				: null;
		}
	}

	return (
		<Col sm='auto' className='Job-Section'>
			<h5>
				{jobs ? `There Are ${jobs.length} Jobs Near You` : 'Loading Jobs'}
			</h5>
			<Container>{displayCards()}</Container>
		</Col>
	);
};
export default Jobs;
