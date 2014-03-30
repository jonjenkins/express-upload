var express = require('express');
var app = express();
var multer = require('multer');

app.configure(function () {
    app.use(multer({
        dest: './static/uploads/',
        rename: function (fieldname, filename) {
            return filename.replace(/\W+/g, '-').toLowerCase();
        }
    }));
    app.use(express.static(__dirname + '/static'));
});

app.post('/api/upload', function (req, res) {
    res.send({file: req.files.userFile.originalname, savedAs: req.files.userFile.name});
});

var server = app.listen(3000, function () {
    console.log('listening on port %d', server.address().port);
});