const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        max_length: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        //getter method?
    },
    username: {
        type: String,
        required: true
    },
    reactions: {
        //array of docs created by reactionSchema
    }
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
