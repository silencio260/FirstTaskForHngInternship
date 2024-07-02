const express = require('express')
const app = express()

// app.set('trust proxy', true)

app.get("/:name", function(req, res){

    var name = req.params.name
    
    var ipAddress = req.connection.remoteAddress
    
    console.log(ipAddress, name)


    res.json({ipAddress})
} );

app.listen(7000, function(){

    console.log('HNG sever has started');
} );
