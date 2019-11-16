const Sequelize = require("sequelize");
const database = require("../database");

const Locations = database.define("locations", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.TEXT
  },
  address: {
    type: Sequelize.TEXT
  },
  phone: {
    type: Sequelize.TEXT
  },
  description:{
    type: Sequelize.TEXT
  }
},

  {
    timestamps: false
  }
  );

module.exports = Locations;

