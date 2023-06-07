const express = require('express');
const db = require('./config/connection');

const { Thought, User, Reaction } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/user', (req, res) => {
    User.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });

app.get('/user/:id', (req, res) => {
    User.findOne({_id: req.params.id})
    .select('-__V')
    .then((user) => 
    !user
    ? res.status(404).json({ message: 'No user with that ID' })
    : res.json(user)
    )
  });

  app.post('/user', (req, res) => {
    const { username, email } = req.body; 
    User.create({ username, email })
        .then((user) => res.json(user))
        .catch((err) => {
          console.log(err);
          return res.status(500).json(err);
        });
  });

  app.put('/user/:userId', (req, res) => {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  })

  app.delete('/user/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({ message: 'User deleted successfully' })
      )
      .catch((err) => res.status(500).json(err));
  });
  

  app.get('/thought', (req, res) => {
    Thought.find({}, (err, result) => {
      if (err) {
        res.status(500).send({ message: 'Internal Server Error' });
      } else {
        res.status(200).json(result);
      }
    });
  });

app.get('/thought/:id', (req, res) => {
    Thought.findOne({_id: req.params.id})
    .select('-__V')
    .then((thought) => 
    !thought
    ? res.status(404).json({ message: 'No thought with that ID' })
    : res.json(thought)
    )
  });

  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });
  