This project uses Sequelize ORM, one of the most popular ORMs.

We'll use the SQLite relational database management system (RDBMS). SQLite creates a simple, lightweight database as a single file stored in your project.

After defining and initializing the model in the previous step, you learned that models are both the objects that you interact with in your application and the tables created and managed in your database. And the ORM (Sequelize) acts as the translator between objects in your code and data stored in a relational database.

everything_in_app.js file contains all the code. It is a good practice to move the respective code to their
respective folders, for example the database code should be placed in its own folder.

We would create a models.js file inside db/models directory which would contain our model.


#CRUD Operations:

##Create Operations:
`build()` method allows you to create an instance but does not save it to the db,
`save()` method will save it to the db:
```
const movie = Movie.build({
  MovieObject
  });

movie.save().
```

`create()` method creates and saves a new record.

Use `build()` when you want to manipulate an object before saving.

##Read Operations:
`findByPk([IdNumber])` method allows us to search for a specific item matching its ID

`findOne()` finds and retrieves first item. It takes an options object where we specify
the attributes to search.
Example:
```
findOne({ where: { title: "Story Night" } });
```

`findAll()` retrieves all records matching the attributes we pass in as options object IF specified
otherwise it returns all the objects in the db.
Example:
```
Movie.findAll();

Movie.findAll({
  where: { title: "Story Night" }
});

# SELECT * FROM movies WHERE title = "Story Night" AND onYoutube = true;
Movie.findAll({
  where: {
    title: "Story Night",
    onYoutube: true
  }
});
```

We can specify the attributes (cols) we want:
```
# SELECT title FROM movies WHERE title = "Story Night" AND onYoutube = true;
Movie.findAll({
  attributes: ['title'],
  where: {
    title: "Story Night",
    onYoutube: true
  }
});
```

We can use operators for more complex filtering.
```
const Op = Sequelize.op

OR

//The db/index.js file exposes the Sequelize package whenever you import ./db into your application code
const { Op } = db.Sequelize

const movies = await Movie.findAll({
  attributes: ['id', 'title'],
  where: {
    releaseDate: {
      [Op.gte]: '2004-01-01' // greater than or equal to the date
    }
  },
});
```

`findAll()` method allows us to specify the order in which the items are returned by
adding order key in the options object:
```
const movies = await Movie.findAll({
  attributes: ['id', 'title'],
  where: {
    title: {
      [Op.endsWith]: 'story'
    },        
  },
  order: [['id', 'DESC']] // IDs in descending order
});
```
The order value is an array of arrays because you could order by multiple attributes (columns). Each array includes the attribute you want to order by and in which order, ASCending or DESCending. In this case we're ordering by IDs in DESCending order.
Example2:
```
const movies = await Movie.findAll({
  attributes: ['id', 'title', 'releaseDate'],
  where: {
    releaseDate: {
      [Op.gte]: '1995-01-01'
    }
  },
  order: [['releaseDate', 'ASC']], // dates in ascending order
});
```

##Update Operations:
Before updating, we need to first read and store the record. We can then use two methods to update:
```
// read and store the record
const toyStory3 = await Movie.findByPk(3);

// Update the property
toyStory3.isAvailableOnVHS = true;

// Save to db
await toyStory3.save();
```

```
const toyStory3 = await Movie.findByPk(3);

// Update the record using the update method
await toyStory3.update({
  isAvailableOnVHS: true,
});
```

Sequelize gives you the ability to specify exactly which attributes should be saved when using either the `save()` or `update()` method, with the fields property.

```
const toyStory3 = await Movie.findByPk(3);

await toyStory3.update({
  title: 'Trinket Tale 3', // this will be ignored
  isAvailableOnVHS: true,
}, { fields: ['isAvailableOnVHS'] });
```

##Delete Operations:
```
// Find a record
const toyStory = await Movie.findByPk(1);

// Delete a record
await toyStory.destroy();
```

Note: Since delete is a reserved keyword in JavaScript, Sequelize uses destroy().

Sequelize provides a "paranoid" setting for "soft" deletes. This gives you the ability to mark a record as deleted instead of physically removing it from the database.

```
class Movie extends Sequelize.Model {}
Movie.init({
  id: {...},
  title: {...},
  runtime: {...},
  releaseDate: {...},
  isAvailableOnVHS: {...},
}, {
  paranoid: true, // enable "soft" deletes
  sequelize
});
```
Setting the paranoid option to true means that a destroyed record will not be physically deleted from the database, but it will also not be returned in future queries. It adds `deletedAt` col to the db, which is set to `null` for the records that are not "deleted".

#Sequelize CLI
When you're building large applications, setting up Sequelize and writing all the model configurations by hand (including importing & exporting files) can get tiresome, and you could make a mistake.

The Sequelize CLI is a tool that initializes all the configuration code, folders and helpers you need for your application. It also sets up and configures Sequelize to generate and export your models.
