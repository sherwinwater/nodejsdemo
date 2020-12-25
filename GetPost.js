const http = require('http');

const todos = [
  {id:1,text:'one'},
  {id:2,text:'two'},
  {id:3,text:'three'}
];

const server = http.createServer(function (req, res) {
  const {headers, url, method} = req;
    let body = [];
    req.on('data', chunk=>{
      body.push(chunk);
    })
    .on('end',()=>{
      body=Buffer.concat(body).toString();
      console.log(body);

      let status = 404;
      const response ={
        success: false,
        data:null,
        error:null
      }

      if(method === 'GET' && url === '/todo'){
        status=200,
        response.success = true,
        response.data = todos;
      }else if(method === 'POST' && url === '/todo'){
        const {id, text} = JSON.parse(body);
        if(!id || !text){
          status=400;
          response.error='please add id and text';
        }else{
        todos.push({id,text});
        status=201,
        response.success = true,
        response.data = todos;
      }}

      res.writeHead(status,{
        'Content-Type':'application/json',
        'X-Powered-By':'Node.js'
      })

      res.end(JSON.stringify(response));

    });

});


const port = 3000;
server.listen(port,()=>{console.log(`server is running on the port ${port}`)})