const express = require("express");
const cors = require("cors");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let session = require("express-session");
let passport = require("passport");

const indexRouter = require("./routes/index");
const userRouter = require("./routes/user/user_router");
const messageRouter = require("./routes/message/message_router");

const app = express();
const port = process.env.PORT || 3000;

// for persisting credentials in a session, and adding all origin to avoid origin problem
app.use(cors({ credentials: true, origin: true }));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

//authenticate session
app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/", indexRouter);
app.use("/api", userRouter);
app.use("/api", messageRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});

app.listen(port, () => {
    console.log(`server started on port ${port}`);
});

module.exports = app;
