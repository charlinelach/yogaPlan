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


// require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});