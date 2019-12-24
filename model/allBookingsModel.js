const mongoose = require("mongoose");

const allBookingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // this will be the id of the user who bookend a particular seat(s)
    ref: "user",
    required: [true, "Each Booking should be associated with a user id"]
  },
  seatsBooked: {
    type: [Number],
    required: [true, "Seats need to be provided"]
  },
  seatsCancelled: {
    type: [Number]
  },
  cancelled: {
    type: Boolean,
    required: true,
    default: false // this will only be set to true if a user cancels all the seats from a particular booking
  },
  busNo: {
    type: String,
    required: [true, "A Booking requires  abus number"]
  },
  busTime: {
    type: Date,
    required: [true, "Bus departure time is required"]
  },
  bookingTime: {
    type: Date,
    default: Date,
    required: true
  },
  startAt: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  }
});

const AllBookings = mongoose.model("AllBookings", allBookingSchema);
module.exports = AllBookings;
