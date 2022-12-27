const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);

});
passport.deserializeUser(function (user, done) {
    done(null, user);

});

passport.use(new GitHubStrategy({
        clientID: '5dc4fcaac4cbe5b6c9bf',
        clientSecret: 'f0ab51e0c765273d601f2056e7f23cdc0f79142a',
        callbackURL: 'http://localhost:3001/github/callback'
    },
    function (accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }));
