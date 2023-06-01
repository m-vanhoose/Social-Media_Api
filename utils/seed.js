const connection = require('../config/connection');
const { User, Thought } = require('../models');

const userSeed = [
    {
        username: "brett01",
        email: "m-vanhoose@live.com"
    },
    {
        username: 'brett02',
        email: 'vanhoose67@gmail.com'
    }
]

// const thoughtSeed = [
//     {
//         thoughtText: "test"
//     }
// ]



connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  User.deleteMany({});

User.collection.insertMany(userSeed);
  
});