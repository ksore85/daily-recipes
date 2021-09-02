const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Awesome recipe, thanks for posting!',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Super delicious, excited for more recipes!',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'I could eat this every night.',
    user_id: 3,
    post_id: 3
  },
  {
    comment_text: 'Hands down my favorite recipe here.',
    user_id: 3,
    post_id: 4
  },
  {
    comment_text: 'This one is a family favorite.',
    user_id: 1,
    post_id: 5
  },
  {
    comment_text: 'Very easy to make, just as easy to consume 😁.',
    user_id: 1,
    post_id: 6
  },
  {
    comment_text: 'This recipe is an absolute gem.',
    user_id: 2,
    post_id: 7
  },
  {
    comment_text: 'Super simple and delicious.',
    user_id: 4,
    post_id: 8
  },
  {
    comment_text: 'Had to make a second batch so good 🤤.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text: 'This one burned so good 🥵.',
    user_id: 3,
    post_id: 10
  },
  {
    comment_text: 'Quick and easy, love this recipe.',
    user_id: 1,
    post_id: 11
  },
  {
    comment_text: 'Felt like a pig eating this one 🐷.',
    user_id: 4,
    post_id: 12
  },
  {
    comment_text: 'Absolutely speechless with this one.',
    user_id: 2,
    post_id: 13
  },
  {
    comment_text: 'Best casserole I have ever had 🦞.',
    user_id: 1,
    post_id: 14
  },
  {
    comment_text: 'Can never go wrong with 🦀🎂.',
    user_id: 2,
    post_id: 15
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;