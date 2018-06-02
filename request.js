	var http = require('http');
	var querystring = require('querystring');
	
	var payload = ['11', '22', '33'],
	url = 'http://localhost:3000/report/generate';

	var data = {'payload': payload };
		// console.log(data.payload.length);
		var post_data = querystring.stringify(data);
		var post_params = {
			host: 'localhost',
			port: '3000',
			path: '/report/generate',
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': post_data.length
			}

		};

		
		var req = http.request(post_params, function(res) {
			res.setEncoding('utf8');
			console.log('statusCode:', res.statusCode);
			console.log('headers:', res.headers);
			res.on('data', function (chunk) {
				console.log('Response: ' + chunk);
			});
		});

		req.on('error', function(e){
			console.log(e);
		});

  // post the data
  req.write(post_data);
  req.end();
