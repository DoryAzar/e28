let axios = require('axios');
export const config = {
	apiKey: 'cXlEaHR1NHY4YXlNNjZYL2pyUmJ4NW5GdGtoNmtLalpORk5NR3lPdktFNjJ2eWR0aCtOd3pBelNsWWdrYjZIWDo6S22kiniYO9V1WZThcqtxbw==',
	apiRoute: 'http://broadposter.com/api/'
	
};

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
