const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Person extends Sequelize.Model {}

  Person.init({
    // model attributes:
    firstName: {
      type: Sequelize.STRING,
      notNull: true,
      validation: {
        notNull: true,
        notEmpty: true
      }
    },
    lastName: ,
  }, { sequelize });

  return Person
}
