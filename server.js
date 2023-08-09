const express = require("express");
// ----Bringing in Express / Import

const app = express();
// ---Connects express instance to the variable 'app'
// ---------------------------------{Requirements}

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

// Groceries

const groceries = [
  "rice",
  "cereal",
  "milk",
  "plantains",
  "eggs",
  "bread",
  "soda",
  "juice",
  "toilet paper",
  "peanut butter",
  "soap",
];

// ----------------------{QueryParam}
app.get("/:indexOfGroceriesArray", (req, res) => {
  if (groceries[req.params.indexOfGroceriesArray]) {
    res.send(
      "Just got some " +
        groceries[req.params.indexOfGroceriesArray] +
        " from the store"
    );
  } else {
    res.send(
      "cannot find anything at this index: " + req.params.indexOfGroceriesArray
    );
  }
});

app.listen("3000", (req, res) => {
  console.log(`Server Listening on Port 3000`);
});
// -----Creates the Server based on PORT value
