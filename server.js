let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// app.post("/submit", ({body}, res) => {
//     const user = new User(body);
//     user.setFullName();
//     user.lastUpdatedDate();
  
//     User.create(user)
//       .then(dbUser => {
//         res.json(dbUser);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });
  
  app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });