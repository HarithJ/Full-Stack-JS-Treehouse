const express = require('express');
const router = express.Router();

const { Article } = require('../models')
const checkArticle = require('../middlewares/checkArticle');

/* Handler function to wrap each route. */
function asyncHandler(cb){
  return async(req, res, next) => {
    try {
      await cb(req, res, next)
    } catch(error){
      res.status(500).send(error);
    }
  }
}

/* GET articles listing. */
router.get('/', asyncHandler(async (req, res) => {
  const articles = await Article.findAll({ raw: true });
  res.render("articles/index", { articles: articles, title: "Sequelize-It!" });
}));

/* Create a new article form. */
router.get('/new', (req, res) => {
  res.render("articles/new", { article: {}, title: "New Article" });
});

/* POST create article. */
router.post('/', asyncHandler(async (req, res) => {
  let article;
  try {
    await Article.create(req.body);
    res.redirect(`/articles/${article.dataValues.id}`);
  } catch (error) {
    if(error.name === "SequelizeValidationError") { // checking the error
      article = await Article.build(req.body);
      res.render("articles/new", { article, errors: error.errors, title: "New Article" })
    } else {
      throw error; // error caught in the asyncHandler's catch block
    }
  }
}));

/* Edit article form. */
router.get("/:id/edit", checkArticle, asyncHandler(async(req, res) => {
  console.log(req.article);
  req.article = article.dataValues
  res.render("articles/edit", { article , title: "Edit Article" });
}));

/* GET individual article. */
router.get("/:id", asyncHandler(async (req, res) => {
  let article = await Article.findByPk(req.params.id);
  if (article) {
    article = article.dataValues
    res.render("articles/show", { article: article, title: "Article Title" });
  }
  else {
    res.sendStatus(404);
  }
}));

/* Update an article. */
router.post('/:id/edit', asyncHandler(async (req, res) => {
  res.redirect("/articles/");
}));

/* Delete article form. */
router.get("/:id/delete", asyncHandler(async (req, res) => {
  const article = await Article.findByPk(req.params.id);
  console.log(article)

  res.render("articles/delete", { article: article.dataValues, title: "Delete Article" });
}));

/* Delete individual article. */
router.post('/:id/delete', asyncHandler(async (req ,res) => {
  const article = await Article.findByPk(req.params.id);
  article.destroy();
  res.redirect("/articles");
}));

module.exports = router;
