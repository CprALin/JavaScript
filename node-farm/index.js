const fs = require('fs');
const replaceTamplate = require('./modules/replaceTemplate');

//FILES
//blocking , synchronous way
//read the data from the file
/* const textIn = fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log(textIn);

//write the data in a file
const textOut = `This is what we know about the avocado : ${textIn}. Create on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt',textOut);

console.log('File written!'); */

//Non-blocking , asynchronous
/* fs.readFile('./starter/txt/start.txt', 'utf-8' , (err, data1) => {
    if(err) return console.log('ERROR!');
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8' , (err, data2) => {
        if(err) return console.log('ERROR!');
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`, 'utf-8' , (err, data3) => {
            if(err) return console.log('ERROR!');
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt' , `${data2}\n${data3}`,'utf-8' , err => {
                if(err) return console.log('ERROR!');
                console.log('Your file has been written' );
            });
        });
    }); 
});
console.log('Will read file!'); */

//SERVER
const http = require('http');
const url = require('url');

//top lvl code - run just at the start 
const tempOverview = fs.readFileSync(`${__dirname}/starter/templates/template-overview.html`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/starter/templates/template-card.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/starter/templates/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req , res) => {
    //console.log(req.url);
    //console.log(req);
    //console.log(url.parse(req.url, true));
    const {query , pathname} = url.parse(req.url, true);
    //const pathname = req.url;

    //OVERVIEW PAGE
    if( pathname === '/' || pathname === '/overview'){
       
       res.writeHead(200, {'Content-type' : 'text/html'}); 

       const cardsHtml = dataObj.map(el => replaceTamplate(tempCard, el));
       const output = tempOverview.replace('{%PRODUCT_CARDS%}' , cardsHtml);


       res.end(output);
    
    //PRODUCT PAGE   
    }else if(pathname === '/product'){
       
       res.writeHead(200, {'Content-type' : 'text/html'});
       const product = dataObj[query.id];  
       const output = replaceTamplate(tempProduct, product);

       res.end(output);

    //API   
    }else if(pathname === '/api'){
       /* fs.readFile(`${__dirname}/starter/dev-data/data.json`, 'utf-8' , (err,data) => {
          const product = JSON.parse(data);
           //console.log(product);
          res.writeHead(200, { 'Content-type' : 'application/json'}); 
          res.end(data); 
       })  */
       res.writeHead(200, { 'Content-type' : 'application/json'}); 
       res.end(data); 
       //res.end('API'); 

    //NOT FOUND   
    } else {
        res.writeHead(404 , {
            'Content-type' : 'text/html',
            'my-own-header' : 'hello-world'
        });
        res.end('<h1>Page not found!</h1>');
    }     
})

server.listen(8000 , '127.0.0.1' , () => {
    console.log('Listening to requests on port 8000');
})