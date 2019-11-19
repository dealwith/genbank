import Sequelize from 'sequelize';

const sequelize = new Sequelize('genbank', 'postgres', 'aaa', {
  host: 'localhost',
  dialect: 'postgres'
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync({ force: false })
  .then(() => {
    console.log(`Database & tables created!`)
  })
