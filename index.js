const http = require("http");
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200,{
        'Content-Type' : 'text/html; charset=utf-8'
    })
    if(req.url==='/' || req.url==='/index'){
        fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content)=>{
                        
            if (err) throw err
            res.end(content )
        })
    }

    if(req.url==='/about'){
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content)=>{
                        
            if (err) throw err
            res.end(content )
        })
    }

    if(req.url==='/contacts'){
        fs.readFile(path.join(__dirname, 'public', 'contacts.html'), (err, content)=>{
                        
            if (err) throw err
            res.end(content )
        })
    }

    else{
        fs.readFile(path.join(__dirname, 'public', 'oops.html'), (err, content)=>{
                        
            if (err) throw err
            res.end(content )
        })
    }


    // res.end(`<form method='post' action='/'>
    // <input name='title' type='text' />
    //  <button type='submit'>submit</button> 
    // </form>
    //        `);
  } 
  
//   else if (req.method === "POST") {
//     const body = [];
//       res.writeHead(200,{
//           'Content-Type' : 'text/html; charset=utf-8'
//       })

//     req.on("data", (data) => {
//       body.push(Buffer.from(data));
//     });
//     req.on("end", () => {
//       const message = body.toString().split("=")[1];
//       res.end(`<h1>Your message: ${message}</h1>`);
//     });
//   }
});

server.listen(3012, () => {
  console.log("server is running on port 3012");
});
