const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  class Lecture extends Sequelize.Model {}

  Lecture.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true, //unique indexable reference for each entry
      autoIncrement: true,
    },
    title: {
      //default length of Sequelize.STRING is 255
      // to Specify diff len: Sequelize.STRING(500)
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          //custom err msg
          msg: "Title cannot be empty"
        },
        notNull: {
          //custom err msg
          msg: "Title cannot be empty"
        }
      },
    },
    releaseDate: {
      // DATE data type accepts a date value provided in yyyy-mm-dd hh:mm:ss format
      // DATEONLY accepts a date value in yyyy-mm-dd format
      type: Sequelize.DATEONLY,
      validate: {},
    },
    runtime: {
      type: Sequelize.INTEGER,
      validate: {},
    },
    onYoutube: {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      validate: {},
    }
  }, { sequelize });

  // Sequelize also supports custom validators that check if a value is within an
  // expected range (like a date or number), part of a specified substring,
  // or if it contains certain characters (like only letters or no letters, for example).
  // It even provides regular expression validators

  return Lecture;
}
