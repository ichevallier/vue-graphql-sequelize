import Sequelize from 'sequelize';
import Faker from 'faker';
import _ from 'lodash';

const Conn = new Sequelize(
  'your-database',
  'root',
  '',
  {
    dialect:'mysql',
    host: 'localhost'
  }
);

const Surfer = Conn.define('surfer', {
  username: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  job:Sequelize.STRING,
  email:Sequelize.STRING,
  //description: Sequelize.TEXT,
  image: Sequelize.STRING,
});

Conn.sync({ force: true }).then(()=> {
  _.times(5, ()=> {
    return Surfer.create({
      username: Faker.internet.userName(),
      firstName: Faker.name.firstName(),
      lastName: Faker.name.lastName(),
      job: Faker.name.jobTitle(),
      email: Faker.internet.email(),
      //description: Faker.lorem.lines(),
      image: Faker.image.avatar()
    }).then(jane =>{
      console.log(jane.toJSON());
    });
  })
});


export default Conn;
