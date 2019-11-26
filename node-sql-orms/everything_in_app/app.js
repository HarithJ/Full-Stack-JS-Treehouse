const Sequelize = require('sequelize');

// sequelize uses constructor function
// initialize the database connection by passing the Sequelize() constructor an
//   object with connection parameters
const sequelize = new Sequelize({
  dialect: 'sqlite',  // specifies the specific version of SQL you're using (the SQL dialect of the database)
  storage: 'movies.db', // file named movies.db
  logging: false // disable logging
});


class Movie extends Sequelize.Model {}; //create a subclass, or a child of another class

// Movie.init() defines a new table in the database with the name 'Movies'
Movie.init({
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: 'Title cannot be empty'
      },
      notNull: true
    }
  }, // col named title

  onYoutube: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    validate: {
      notNull: true
    }
  }
}, { sequelize }); // sequelize property defines the sequelize instance to attach to the model

// An important distinction is that the model name is singular and
// table name is plural. Sequelize uses a library called inflection under the
// hood to automatically pluralize the table name


// Sequelize provides the sync() method, which automatically creates or updates
//  your database tables (according to your model definition)
// In other words, we want to create the actual 'Movies' table.
// We’ve only defined the model in JavaScript. We need to sync those changes

// async immediately invoked function expression (IIFE)
(async () => {
  // sync Movies table:
  // await Movie.sync();

  // sync all models
  // Calling sync({ force: true }) issues a DROP TABLE IF EXISTS statement,
  // which completely deletes the table, before issuing the CREATE TABLE IF NOT EXISTS statement.
  // useful for testing or development
  await sequelize.sync({ force: true });
  try {
    await sequelize.authenticate(); //authenticate() function returns a promise that resolves to a successful, authenticated connection to the database
    console.log('connection to the db is successfull!');

    // create a movie
    const movie = await Movie.create({
      title: 'Story Night',
      onYoutube: false
    });
    console.log(movie.toJSON());

    const movieById = await Movie.findByPk(1);
    console.log(moviebyId.toJSON());

  } catch (error) {
    // sequelize throws SequelizeValidationError when validation fails against a certain col
    // we would catch this error and transform it to a simpler error msg
    if (error.name == 'SequelizeValidationError') {
      // error thrown by sequelize contains errors property
      // which is an array with 1 or more ValidationErrorItems, one for each validation that failed
      const failedValidations = error.errors.map(failedValidation => failedValidation.message);
      console.error('Validation errors: ', failedValidations);
    }
    else {
      throw error
    }
  }
})();
