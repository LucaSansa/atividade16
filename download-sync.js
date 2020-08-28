const download = require('download');

(async () => {
    const start = new Date();

    await download('https://github.com/andreendo/eta/blob/master/rawdata/randomModelsResults-raw.txt', 'res');
    await download('https://github.com/andreendo/noderacer/blob/master/package.json', 'res');
    await download('https://github.com/andreendo/eta/blob/master/rawdata/realModelsResults-raw.txt', 'res');
    await download('https://f-droid.org/repo/index.xml', 'res');

    const execTime = new Date() - start;
    console.log(`Exec time: ${execTime} ms`);
})();

// Este é o mais lerdo para baixar os arquivos, pois todos os downloads estao 
//sendo baixados de forma ordenada, um depois do outro, quando um await começa ele
//deve terminar par o proximo ser executado.