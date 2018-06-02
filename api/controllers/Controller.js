'user strict'

exports.generateResponse = function(req, res){
	console.log(req.data);
	if( typeof req.data == 'undefined')
		res.writeHead(400);

	var len = req.data.payload.length;

	if(len === 0)
		res.writeHead(412);
	if(len > 100)
		res.writeHead(413,{'Content-Type': 'text/plain'});

	res.writeHead(212);
}