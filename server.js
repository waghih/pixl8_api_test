const express = require('express');
let app = express();

app.use( express.static('./') );

// general route
app.get( '/', ( req, res ) => {
  res.sendFile( __dirname + '/index.html' );
})

var port = process.env.PORT || 8000;
  
var server = app.listen(port, function () {
    console.log('Updated : Server listening at port %d', port);
}); 