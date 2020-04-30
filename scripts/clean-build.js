"use strict";
const path = require('path');
const fs = require('fs');
const rootDir = path.dirname(__dirname)
const distDir = path.join(rootDir, 'dist')
const styleDir = path.join(distDir, 'style')

fs.readdirSync(distDir).map((file) => {
    fs.unlink(path.join(distDir, file), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('done!!')
        }
    });
});

fs.readdirSync(styleDir).map((file) => {
    fs.unlink(path.join(styleDir, file), (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('done!!')
        }
    });
});

fs.rmdir(path.join(distDir, 'style'), (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('done!!')
    }
});
