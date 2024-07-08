// Sequalize is our ORM for SQLite
const { Sequelize, DataTypes } = require("sequelize")

// This database is saved to a file, so it will persist even after the application is closed. It will create a file called mydatabase.sqlite in the root of the project, or use it if it already exists.
const sequelize = new Sequelize("sqlite:./mydatabase.sqlite")

// Sequalize is our ORM for SQLite
const User = sequelize.define("User", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

// Sequalize is our ORM for SQLite
sequelize
  .sync()
  .then(() => {
    console.log("Database synced!")
  })
  .catch((error) => {
    console.error("Error syncing database:", error)
  })

module.exports = { sequelize, User }
