Sequelize has a CLI that aids in initializing and bootstrapping your database project, creating models, database configuration files and more.

Running npx sequelize init initializes all the configuration code, folders and helpers needed for the application. It sets up four directories: config, migrations, models, and seeders.

The config directory holds the config file which contains database configurations for the three main environments you need in an application:
- development
- testing
- production
