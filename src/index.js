import express from 'express';
import router  from './routes/routes.js';

const app = express();
const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Servidor rodando => http://localhost:${port}`)
});