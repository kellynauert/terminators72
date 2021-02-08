import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobsDisplay from './JobsDisplay';
const Jobs = (props) => {
	const lat = props.sessionLatitude;
	const long = props.sessionLongitude;
	const [jobs, setJobs] = useState([]);

	const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
	const gitJobURL = `https://jobs.github.com/positions.json?lat=`;
	// const gitJobURL = `https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823`;

	useEffect(() => {
		if (long) {
			fetch(corsURL + gitJobURL + lat + '&&long=' + long)
				.then((res) => res.json())
				.then((json) => {
					console.log(corsURL + gitJobURL + lat + '&&long=' + long);
					console.log(long);
					setJobs(json);
				});
		}
	}, []);

	function displayCards() {
		console.log(jobs);
		return jobs.length > 0
			? jobs.slice(0, 3).map((jobs) => <JobsDisplay jobs={jobs} />)
			: null;
	}

	return (
		<Col sm='auto' className='Job-Section'>
			<h5>{`There are ${jobs.length} Jobs Near You`}</h5>
			<Container>{displayCards()}</Container>
		</Col>
	);
};
export default Jobs;
