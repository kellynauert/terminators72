import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import JobsDisplay from './JobsDisplay';
const Jobs = (props) => {
	const lat = props.latitude;
	const long = props.longitude;
	const [jobs, setJobs] = useState([]);

	const fetchJobs = () => {
		const corsURL = 'https://efa-cors-anywhere.herokuapp.com/';
		const gitJobURL = `https://jobs.github.com/positions.json?lat=${lat}&&long=${long}`;
		// const gitJobURL = `https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823`;
		fetch(corsURL + gitJobURL)
			.then((res) => res.json())
			.then((json) => {
				console.log(json);
				setJobs(json);
			});
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	function displayCards() {
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
