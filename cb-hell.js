const fs = require('fs');

fs.readFile('f1.txt', 'utf-8', (err, fileName2) => {
    if (err) throw err;

    fs.readFile(fileName2, 'utf-8', (err, fileName3) => {
        if (err) throw err;

        fs.readFile(fileName3, 'utf-8', (err, fileName4) => {
            if (err) throw err;

            //console.log('Conteudo: ', fileContent);
            fs.readFile(fileName4, 'utf-8', (err, fileName5) =>{
                if (err) throw err;
                //console.log('Conteudo: ', fileContent);
                fs.readFile(fileName5, 'utf-8', (err, fileName6) =>{
                    if (err) throw err;

                    fs.readFile(fileName6, 'utf-8', (err, fileContent) =>{
                        if (err) throw err;
                        console.log('Conteudo: ', fileContent);
                    })
                })
            });
        });
    });
});