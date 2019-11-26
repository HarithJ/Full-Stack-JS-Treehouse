'use strict'
const { Article } = require('../models')
const checkArticle = async (req, res, next) => {
  const article = await Article.findByPk(req.params.id);
  if (article){
    req.article = article;
    next();
  }
  return res.sendStatus(404);
}

module.exports =  checkArticle;
