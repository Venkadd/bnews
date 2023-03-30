import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
  username: {type: String, required: true, min: 4, unique: true},
  password: {type: String, required: true},
});

const User = mongoose.model('User', UserSchema);

export default User;

// var Hotel = mongoose.model("Hotel", HotelSchema);

// export default Hotel