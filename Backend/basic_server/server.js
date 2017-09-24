var http = require("http");

var server = http.createServer(function(req, res) {
    res.write("welcome");
})

server.listen(process.env.PORT || 8080, function() {
    console.log("server running on port " + process.env.PORT || 8080);
})
