const passport = require('passport');
const SpotifyStrategy = require('passport-spotify').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
    new SpotifyStrategy(
        {
            clientID: '70a4272c8dc94266a6ca50ffad2cf73c',
            clientSecret: 'ea19ba4739924d4891ce18915eecfd8e',
            callbackURL: 'http://localhost:3002/spotify/callback'
        },
        function (accessToken, refreshToken, profile, done) {
            return done(null, profile);
        }
    )
);
