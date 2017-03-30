/**
 * Created by dingjunyi on 2017/2/12.
 */
const request = require('request');
const cheerio = require('cheerio');
const getEid = require('./server/component/eid');
const detail = require('./server/component/detail');
const citedby = require('./server/component/citedby');
const kwdRes = require('./server/component/kwdres');
const trans = require('./server/component/tfJson');
const path = require('path');


const express = require('express');

const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

const key = "5c8ccee1796b0de95a022f90fcf8ad1c";

app.get('/',  (req, res)=> {
    res.render('index.ejs');
});

app.get('/rs',(req,res)=>{
    kwd =req.query.wd;
    kwd=kwd.replace(/ /g,"+");
    console.log(kwd);
    kwdRes(key,kwd,(errDetail,resDetail)=>{
        res.render('main.ejs',{result:resDetail});
    });

});

app.get('/404',  (req, res)=> {
    res.render('404.ejs');
});

const port = process.env.PORT ? process.env.PORT : 1130;
app.listen(port, () =>{
        console.log(`app started, listening on port:${port}`);
    }
);
