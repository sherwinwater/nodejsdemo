const http = require('http');

// const server = http.createServer();
// server.on('connection', (socket) => {
//   console.log('new connection....')
// });
const data = [
  {id:1,text:'one'},
  {id:2,text:'two'},
  {id:3,text:'three'}
];

const server = http.createServer(function (req, res) {
  const {headers, url, method} = req;
  if (req.url === '/') {
    res.setHeader('Content-Type','text/html');
    res.setHeader('X-Powered-By','Node.js');
    res.write('hello-world');
    res.write('<h1>h1 title</h1>');
    console.log(headers,url,method);
    res.end();
  }

  if (req.url === '/data') {
    res.writeHead(200,{
      'Content-Type':'application/json',
      'X-Powered-By':'Node.js'
    })
    // res.setHeader('Content-Type','application/json');
    // res.setHeader('X-Powered-By','Node.js');
    // res.write(JSON.stringify(data));

    let body = [];
    req.on('data', chunk=>{
      body.push(chunk);
    })
    .on('end',()=>{
      body=Buffer.concat(body).toString();
      console.log(body);
    });

    res.write(JSON.stringify({
      success:true,
      data:data
    }));
    res.end();
  }

  if (req.url === '/test') {
    res.writeHead(400,{
      'Content-Type':'application/json',
      'X-Powered-By':'Node.js'
    })
    res.end(JSON.stringify({
      success:false,
      error:'Please add email',
      data:null
    }));
  }

  if (req.url === '/app/s') {
    res.write(JSON.stringify([1, 2, 'n']));
    res.end('<h1>homepage</h1>');
  }

});

function next() {
  console.log("this is next function--");
}

const port = 3000;
// server.listen(3000);
server.listen(port,()=>{console.log(`server is running on the port ${port}`)})
console.log('listening on port of 3000...');
