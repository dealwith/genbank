import Sequelize from 'sequelize';
import {  } from './src/models'

const sequelize = new Sequelize('genbank', 'postgres', 'aaa', {
  dialect: 'postgres',
  host: 'localhost'
}); 