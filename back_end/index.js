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

app.get("/locations", (req, res) => {
  Locations.findAll()
    .then(locations => {
      let allLocations = [];
    //   for (let i = 0; i < locations.length; i++) {
    //     let name = locations[i].name;
    //     let address = locations.address;
    //     let phone = locations.phone;

    //     allLocations.push({ name, address, phone });
    //   }
      res.json(locations)
      //res.json({ Locations: allLocations });
    })
    .catch(err => res.json(err));
});

app.listen(3001, () => console.log("server is running"));

// const data = [
//     {
//       name: "Beautiful NAme Here",
//       address: "1723 Dr Martin L King Jr Blvd"
//     },
//     {
//       name: "Beautiful Name Here",
//       address: "1723 Dr Martin L King Jr Blvd"
//     },
//     {
//       name: "Beautiful Name Here",
//       address: "1723 Dr Martin L King Jr Blvd"
//     },
//     {
//       name: "Beautiful Name Here",
//       address: "1723 Dr Martin L King Jr Blvd"
//     },
//     {
//       name: "Beautiful Name Here",
//       address: "1723 Dr Martin L King Jr Blvd"
//     }
//   ];
