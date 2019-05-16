var fs = require('fs'),
path = './index.html',
stats;

try {
stats = fs.statSync(path);
console.log("Index.html exists; if there are other files, they will be listed below:");
}
catch (e) {
console.log("Index.html is not present; if there are other files, they will be listed below:");
}

var fs = require('fs');
fs.realpath(__dirname, function(err, path) {
    if (err) {
        console.log(err);
     return;
    }
    console.log('Path is : ' + path);
});
fs.readdir(__dirname, function(err, files) {
    if (err) return;
    files.forEach(function(f) {
        console.log('Files: ' + f);
    });
});
