const fs = require('fs');
const express = require('express');
const host = '0.0.0.0';
const port = 8888;

const app = express();
app.get('/', (req, res) => {
    fs.readFile('./index.html', function(error, fileContent) {
	if(error){
		res.writeHead(500, {'Content-Type': 'text/plain'});
		res.end('Error Occurred');
		return;
	}

	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(fileContent);
	res.end();
    });
});

app.listen(port, host);
console.log(`Running on http://:${host}:${port}`);
