const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  next();
});

const database = require("./database");
const Locations = require("./models/locations");
const Volunteers = require("./models/volunteers");

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

app.get("/volunteers", (req, res) => {
  Volunteers.findAll()
    .then(volunteers => {
     res.json(volunteers);
    })
    .catch(err => res.sendStatus(500));
});

app.post("/add_volunteer", (req, res) => {
  if(req.body){
    Volunteers.create(req.body).then( data => {
      res.send(data)
    }).catch(err => {
      res.sendStatus(400)
    })

  }
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
