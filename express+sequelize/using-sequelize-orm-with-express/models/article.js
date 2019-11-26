'use strict'
const Sequelize = require('sequelize');

module.exports = sequelize => {
  class Article extends Sequelize.Model {
    shortDescription() {
      const shortDesc = this.body.length > 200 ? this.body.substring(0, 200) + '...' : this.body;
      return shortDesc;
    }
  }

  Article.init({
    title: {
      type: Sequelize.STRING,
      validate: {
        notEmpty: {
          msg: 'Title is required'
        }
      }
    },
    author: {
      type: Sequelize.STRING,
    },
    body: {
      type: Sequelize.TEXT,
      validate: {
        notEmpty: {
          msg: 'The article is required'
        }
      }
    },
  }, { sequelize });

  return Article
}
