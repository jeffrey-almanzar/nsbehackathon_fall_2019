const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const database = require("./database");
const Locations = require("./models/locations");

database
  .authenticate()
  .then(() => {
    console.log("Connected database");
  })
  .catch(err => {
    console.log("Error " + err);
  });

app.get("/", (req, res) => {
  Locations.findAll()
    .then(locations => {
      res.json(locations);
    })
    .catch(err => res.json(err));
});

app.get("/locations/:value", (req, res) => {
  if (req.params.value) {
    Locations.findAll().then(locations => {
      const filtered = locations.filter(place => {
        return (
          place.name.toLowerCase().includes(req.params.value) ||
          place.address.toLowerCase().includes(req.params.value)
        );
      });
      res.json(filtered);
    });
  } else {
    Locations.findAll()
      .then(locations => {
        res.json(locations);
      })
      .catch(err => res.json(err));
  }
});

app.listen(3001, () => console.log("server is running"));
