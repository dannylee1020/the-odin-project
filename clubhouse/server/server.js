import express from "express";

const app = express();

app.get("/api", (req, res) => {
    res.json({ tests: ["testOne", "testTwo", "testThree"] });
});

app.listen(5000, () => {
    console.log("server started on port 5000");
});
