'use strict'

function fsDemo() {
    var fs = require('fs');

    fs.stat('in.txt', function (err, stat) {
        if (err) {
            console.log(err);
        } else {
            console.log('isFile: ' + stat.isFile());

            console.log('isDirectory: ' + stat.isDirectory());

            if (stat.isFile()) {
                console.log('size: ' + stat.size);
                console.log('birth time: ' + stat.birthtime);
                console.log('modified time: ' + stat.mtime);

                fs.readFile('in.txt', 'utf-8', function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('fs.readFile: ');
                        console.log(data);
                    }
                });
            }
        }
    });

    console.log('\n\n\n');

    var stream = fs.createReadStream('in.txt', 'utf-8');

    stream.on('data', function (chunk) {
        console.log('BEGIN');
        console.log(chunk);
    });

    stream.on('end', function () {
        console.log('END');
    });

    stream.on('error', function (err) {
        console.log('Error: ' + err);
    });

};

module.exports = fsDemo;
// exports.fsDemo = fsDemo;