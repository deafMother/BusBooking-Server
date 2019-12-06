const express = require("express");

const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controller/errorConroller");
// import routes
const busRouter = require("./routes/busRoutes");
const bookingRouter = require("./routes/bookingRoute");
const userRouter = require("./routes/userRoutes");

const app = express();

// body parser
app.use(
  express.json({
    limit: "20kb"
  })
);

// all routes entry points will be here
app.use("/", busRouter);
app.use("/bookBus", bookingRouter);
app.use("/user", userRouter);
// default undefined routes
app.all("*", (req, res, next) => {
  // throw error using AppError
  next(new AppError("This route is not defined", 404));
});
// this is the global error handler
app.use(globalErrorHandler);
module.exports = app;
