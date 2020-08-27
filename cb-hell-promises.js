const fsp = require('fs').promises;

fsp.readFile('f1.txt', 'utf-8')
    .then((fileName2) => {
        return fsp.readFile(fileName2, 'utf-8');
    })
    .then((fileName3) => {
        return fsp.readFile(fileName3, 'utf-8');
    })
    .then((fileName4) => {
        return fsp.readFile(fileName4, 'utf-8');
    })
    .then((fileName5) => {
        return fsp.readFile(fileName5, 'utf-8');
    })
    .then((fileName6) => {
        return fsp.readFile(fileName6, 'utf-8');
    })
    .then((fileContent) => {
        console.log('Conteudo: ', fileContent);
    })
    .catch((err) => {
        console.log(err);
    });