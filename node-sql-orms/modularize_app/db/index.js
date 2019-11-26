// this file holds the Sequelize and database configurations, as well as the models.
// Exposing the Sequelize package wherever you import models into your code means
// that you'll have all of Sequelize's methods and functionality to use

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'movies.db',
  logging: log => {
    console.log(log);
  }
});

const db = {
  sequelize,
  Sequelize,
  models: {}
};


db.models.Lecture = require('./models/lecture.js')(sequelize);

// Alternative way for writing the above code:

// const Movie = require('./models/movie.js');
// db.models.Movie = Movie(sequelize);

db.models.Person = require('./models/person.js')(sequelize)


module.exports = db;
