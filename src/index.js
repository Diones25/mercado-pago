import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router  from './routes/routes.js';

const app = express();
const port = 3000;

//Essas duas linhas faz o dirname funcionar
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//Definir pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);

/*
import conn from './db/conn.js';

conn
  //.sync({ force: true })
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log(chalk.bgGreenBright.blackBright(`Servidor rodando na URL http://localhost:${port}`));
    })
  }).catch((error) => {
    console.log(chalk.bgRedBright.blackBright(`ERRO: ${error}`));
  })
*/

app.listen(port, () => {
  console.log(`Servidor rodando => http://localhost:${port}`)
});