const Sequelize = require('sequelize');

const sequelize = new Sequelize('genbank', 'postgres', 'aaa', {
  dialect: 'postgres',
  host: 'localhost'
}); 


const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // attributes
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull defaults to true
  }
}, {
  sequelize,
  modelName: 'user'
  // options
});
    User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
      console.log("Jane's auto-generated ID:", jane.id);
    });

sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));




sequelize.sync({force: false})
    .then(() => {
        console.log(`Database & tables created!`)
    })