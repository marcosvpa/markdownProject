const chalk = require('chalk');
const fs = require('fs');


function trataErro(erro) {
  throw new Error(erro);
}


async function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
    try {
      const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
      console.log(chalk.green(texto));
    } catch(erro) {
      trataErro(erro);
    }
}


// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.promises
//   .readFile(caminhoDoArquivo, encoding)
//   .then((texto) =>  console.log(chalk.green(texto)))
//   .catch((erro) => trataErro(erro));
// }




// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding,(erro,texto) =>{
//     if (erro) {
//       trataErro(chalk.red(erro.code,'Não há arquivo no caminho'));
//     } else {
//       console.log(chalk.green(texto));
//     }
    
//   })
// };
pegaArquivo('./arquivos/texto1.md');