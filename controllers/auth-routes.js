const router = require('express').Router();
const passport = require('passport');

router.get('/google',
passport.authenticate('google', { scope: 'https://www.google.com/m8/feeds' }),
  (req, res)=>{
    console.log(req)
    // req.session.save(() => {
    //   req.session.user_id = dbUserData.id;
    //   req.session.username = dbUserData.username;
    //   req.session.loggedIn = true;

    //   res.json(dbUserData);
    // });
    res.send("success")
  }
  )

  router.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('we hit this callback');
    res.redirect('/');
  });

  module.exports = router;