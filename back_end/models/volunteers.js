const Sequelize = require("sequelize");
const database = require("../database");

const Volunteers = database.define(
  "volunteers",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.TEXT
    },
    lastname: {
      type: Sequelize.TEXT
    },
    email: {
      type: Sequelize.TEXT
    }
  },

  {
    timestamps: false
  }
);

module.exports = Volunteers;
