const download = require('download');

const start = new Date();

const p1 = download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
const p2 = download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
const p3 = download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
const p4 = download('https://f-droid.org/repo/index.xml', 'res');

Promise.all([p1, p2, p3, p4])
    .then(() => {
        const execTime = new Date() - start;
        console.log(`Exec time: ${execTime} ms`);
    });
// Este é o mais rapido na maioria das vezes, cada variavel recebe um download, e cada variavel 
// desta forma baixa parte do download, e podem ser executadas de forma paralela entao aqui temos
// 4 doewloads ocorrendo em quanto no arquivo sync temos um download ocorrendo por partes.