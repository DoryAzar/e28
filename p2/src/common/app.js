/*
 * app.js - Common configuration and 3rd-party scripts to be used 
 * Author: Dory Azar
 *
 */

// Make axios accessible across the components
let axios = require('axios');

// API configuration of the PHP back-end that was created for this course
export const config = {
	apiKey: 'cXlEaHR1NHY4YXlNNjZYL2pyUmJ4NW5GdGtoNmtLalpORk5NR3lPdktFNjJ2eWR0aCtOd3pBelNsWWdrYjZIWDo6S22kiniYO9V1WZThcqtxbw==',
	apiRoute: 'http://broadposter.com/api/'
	
};

// Axios configuration that uses a bearer token to be used with the REST API created
export const apiConfig = {
	
	async: true,
	crossDomain: true,
	headers: {
		"Authorization": "Bearer " + config.apiKey,
		'Content-Type': 'application/json',
		 'Set-Cookie': 'widget_session=caligrafy_app; SameSite=None; Secure'
	}
	
};

export const callApi = axios;
