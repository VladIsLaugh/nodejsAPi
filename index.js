const http = require("http");
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
    if (req.method === "GET") {

        if(req.url==='/' || req.url==='/index'){

            res.writeHead(200,{
                'Content-Type' : 'text/html; charset=utf-8'
            })
        fs.readFile(path.join(__dirname, 'public', 'html', 'index.html'), (err, content)=>{
                        
            if (err) throw err
            res.end(content )
        })
    }

    else if(req.url==='/about'){
        res.writeHead(200,{
            'Content-Type' : 'text/html; charset=utf-8'
        })
    fs.readFile(path.join(__dirname, 'public','html', 'about.html'), (err, content)=>{
                    
        if (err) throw err
        res.end(content )
    })
}

else if(req.url==='/contacts'){
    res.writeHead(200,{
        'Content-Type' : 'text/html; charset=utf-8'
    })
fs.readFile(path.join(__dirname, 'public', 'html', 'contacts.html'), (err, content)=>{
                
    if (err) throw err
    res.end(content )
})

}

else if(req.url==='/api/contacts'){
    res.writeHead(200,{
        'Content-Type' : 'text/json;'
    })
fs.readFile(path.join(__dirname, 'public', 'json', 'contacts.json'), (err, content)=>{
                
    if (err) throw err
    res.end(content )
})

}

else{
    if (req.method === "GET") {
        res.writeHead(200,{
            'Content-Type' : 'text/html; charset=utf-8'
        })
    fs.readFile(path.join(__dirname, 'public','html', 'oops.html'), (err, content)=>{
                    
        if (err) throw err
        res.end(content )
    })
}
}
    
    
    
    }else{
        console.log('not get');
    }
    }
)

    // res.end(`<form method='post' action='/'>
    // <input name='title' type='text' />
    //  <button type='submit'>submit</button> 
    // </form>
    //        `);

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

server.listen(3012, () => {
  console.log("server is running on port 3012");
});
