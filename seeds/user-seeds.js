const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ksore85',
    email: 'ksore85@cbc.ca',
    password: 'password123'
  },
  {
    username: 'JakeL94',
    email: 'JakeL94@sogou.com',
    password: 'password123'
  },
  {
    username: 'marisandb',
    email: 'marisandb@last.fm',
    password: 'password123'
  },
  {
    username: 'lclark31',
    email: 'lclark31@goo.ne.jp',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;

