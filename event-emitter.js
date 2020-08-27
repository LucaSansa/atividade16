const fs = require('fs');

const readStream = fs.createReadStream('./res/1MB-file.txt', { encoding: 'utf8' });
const readStream2 = fs.createReadStream('./res/2MB-file.txt', { encoding: 'utf8' })

// o arquivo eh lido por partes 'chunk'
// a cada leitura de parte dos dados, o evento 'data' eh disparado
readStream.on('data', (chunk) => {
    console.log('carregado parte do arquivo 1');
});

readStream2.on('data', (chunk) => {
    console.log('carregado parte do arquivo 2');
});

// Chamado uma unica vez quando o stream nao tem mais dados 
readStream.on('end', () => {
    console.log('fim do arquivo 1');
});

readStream2.on('end', () =>{
    console.log('fim do arquivo 2')
})