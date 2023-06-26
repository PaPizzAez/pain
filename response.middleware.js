// response.middleware.js
function formatResponse(req, res, next) {
	res.jsonSuccess = function (data) {
		res.status(200).json(data);
	};

	res.jsonError = function (statusCode, message) {
		res.status(statusCode).json({ error: true, message });
	};

	next();
}

module.exports = formatResponse;
