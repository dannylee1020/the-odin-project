const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
    res.json({ tests: ["testOne", "testTwo", "testThree"] });
});

app.listen(3000, () => {
    console.log("server started on port 3000");
});
