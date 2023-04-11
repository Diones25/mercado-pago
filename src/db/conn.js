import { Sequelize } from "sequelize"; 'sequelize';
import chalk from "chalk";

const sequelize = new Sequelize('payments', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

try {
  sequelize.authenticate();
  console.log(chalk.bgGreenBright.blackBright('Conectado com sucesso!'));
} catch (error) {
  console.log(chalk.bgRedBright.black(`Não foi possível conectar: ${error}`));
}

export default sequelize; 