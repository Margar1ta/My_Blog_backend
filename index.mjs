import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
//var Mongoose = require('mongoose');
//connectionUrl = mongodb://some_login:some_pwd@some_host:27017/some_db?authSource=admin
//Mongoose.connect(connectionUrl);
import myR from './routes/my';
import postsR from './routes/users';



import compression from 'compression';
const PORT=4321;
const app=express();
const CORS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,POST,DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers'
};




app
  .use(express.static('public'))
  .use((req, res, next) => res.set(CORS) && next())
  .use(bodyParser.json())
  .use(compression())
  .use((r,res,n)=>n())

  .use('/my', myR(express))
  .use('/posts', postsR.rtr(express))

  .get(/hello/,r=>r.res.end('Hello world!'))

  .get('/add/:a/:b',r=> r.res.end(String(Number(r.params.a)+Number(r.params.b))))

  .get('/err',()=>{throw 'Bad thing happened!'})
  .get('/err2',()=>{throw 'Awful thing happened!'})
  .get(/(\/subtract\/\d+\/\d+$)/, function (req, res) {
    var arr = req.url.split("/");
    res.send((+ arr[2] - +arr[3])+'');
  })
/*  .get(/(\/author\/\?key$)/, function (req, res) {
    ///////    ?key=*    ///////////////////
    res.send('Margarita Iakovleva');
  })*/
  .get(/(\/author\/\?key=ooo$)/, function (req, res) {
    ///////    ?key=*    ///////////////////
    res.send('Margarita Iakovleva');
  })
  .get( /(posts1\?xyz=\d+)/, function (req, res) {
    ///////    ?key=*    ///////////////////
    res.send('Hurrey!!!!!!');
  })
  .get(/(\/author\/\?)/, function (req, res) {
    ///////    ?key=*    ///////////////////
    res.send('Margarita Iakovleva');
  })/*
  .get(/(\/author\/$)/, function (req, res) {
    ///////    ?key=*    ///////////////////
    res.send('Margarita Iakovleva');
  })
*/
  .get(/(\/multiply\/\d+\/\d+$)/, function (req, res) {
    var arr = req.url.split("/");
    res.send((+ arr[2] * +arr[3])+'');
  })
  .get(/(\/divide\/\d+\/\d+$)/, function (req, res) {
    var arr = req.url.split("/");
    res.send((+ arr[2] / +arr[3])+'');
  })
  .get(/(\/pow\/\d+\/\d+$)/, function (req, res) {
    var arr = req.url.split("/");
    res.send(Math.pow(+arr[2],+arr[3])+'');
  })
  .get(/(\/kramer\/\d+\/\d+\/\d+\/\d+\/\d+\/\d+$)/, function (req, res) {
    var arr = req.url.split("/");
    let args = [+arr[2],+arr[3],+arr[4],+arr[5],+arr[6],+arr[7]];
    //создаем матрицы
      var m = [[args[0], args[1]], [args[3], args[4]]],
      mx = [[args[2], args[1]], [args[5], args[4]]],
      my = [[args[0], args[2]], [args[3], args[5]]];
      // вычисляем определители матриц
      let d = m[0][0]*m[1][1] - m[0][1]*m[1][0];
      let dx = mx[0][0]*mx[1][1] - mx[0][1]*mx[1][0];
      let dy = my[0][0]*my[1][1] - my[0][1]*my[1][0];

      if (d != 0) {
      let x = dx / d,
      y = dy / d;
      res.send('{"x":'+x+',"y":'+y+'}');
    } else {
      res.send('Определитель равен нулю!');
    }
  })
  .use(r=>r.res.status(404).end('Still not here, sorry!'))
  .use((e,r,res,n)=>res.status(500).end(`Error: ${e}`))
;

http
  .createServer(  app  )
  .listen(process.env.PORT || PORT, ()=>console.log(process.pid))
;
