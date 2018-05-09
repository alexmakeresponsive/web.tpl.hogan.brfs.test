var fs             = require('fs');
var hogan          = require('hogan.js');

var templateHeader      = require('../../parts/Header/Header');
var templatePostsHome   = require('../../parts/Posts/PostsHome/PostsHome');


var template = fs.readFileSync( __dirname + '/Home.html').toString();

var context = {
    Header: templateHeader,
    PostsHome: templatePostsHome
};

var templateCompiled       = hogan.compile(template);
var templateRendered       = templateCompiled.render(context);


module.exports = templateRendered;