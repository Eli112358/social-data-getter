var resultObj;
var login = (provider) => {
	OAuth.popup(provider, {cache: true}).done((p) => {
		resultObj = p;
	}).fail((p) => {
	});
};
var logout = OAuth.clearCache;
var getData = (resource, params, callback) => {
	var paramsArray = [];
	for (var x in params) paramsArray.push(x + '=' + params[x]);
	var url = resource + '?' + paramsArray.join('&');
	resultObj.get(url).done(callback.run).fail(callback.error);
};
var initialize = () => {
	OAuth.initialize('PlcWON5gLeLsM92yfNnUQ7_IsXQ');
};
