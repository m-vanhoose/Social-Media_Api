const { Schema, model } = require('mongoose');
// const thoughtSchema = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true, 
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //need email validation
    },
    // thoughts: [thoughSchema],
    friends: [userSchema]
  },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
);

const User = model('user', userSchema);

module.exports = User;
