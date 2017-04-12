var twitterAPI = {
	version: '1.1',
	url: 'https://api.twitter.com/'
};
var xhr = new XMLHttpRequest();
var getBearerToken = (key, secret, callback) => {
	var url = twitterAPI.url + 'oauth2/token';
	var credentials = atob(key + ':' + secret); //bearer token credentials
	xhr.onreadystatechange = () => {
		if(this.readyState == 200) callback.run(JSON.parse(this.responseText).access_token);
	};
	xhr.open('POST', url, true);
	xhr.setRequestHeader('Authorization', 'Basic ' + credentials);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
	xhr.send('grant_type=client_credentials');
};
var callAPIMethod = (methodUrl, callback) => {
	var url = twitterAPI.url + twitterAPI.version + '/' + methodUrl;
	xhr.onreadystatechange = () => {
		if(this.readyState == 200) callback.run(JSON.parse(this.responseText));
	};
	xhr.open('GET', url, true);
	xhr.send();
};
