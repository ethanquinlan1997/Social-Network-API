const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/Social-Network-API",
  {
    // useFindAndModify: false, - getting errors when using this setting
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Logs Mongo queries being executed.
mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => console.log(` Connected on localhost:${PORT}`));
