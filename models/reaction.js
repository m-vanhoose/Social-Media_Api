// // const { Schema, model } = require('mongoose');
// const mongoose = require('mongoose');

// const { Schema } = mongoose;

// const reactionSchema = new Schema(
//   {
//     reactionId: {
//         type: Schema.Types.ObjectId,
//         default: new mongoose.Types.ObjectId(),
//     },
//     reactionBody: {
//         type: String,
//         required: true,
//         max_length: 280
//     },
//     username: {
//         type: String,
//         required: true
//     },
//     createAt: {
//         type: Date,
//         default: Date.now 
//     }
//   },
//   {
//     toJSON: {
//       getters: true,
//     },
//   }
// );

// const Reaction = mongoose.model('reaction', reactionSchema);

// module.exports = Reaction;
