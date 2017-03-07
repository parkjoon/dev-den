import axios from 'axios';

const rdUrl = 'http://localhost:3001/api';

export function getFreelancerProfiles() {
	return axios.get(`${rdUrl}/freelancers`);
}
