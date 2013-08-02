
var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')
  , templatePath = path.normalize(__dirname + '/../app/mailer/templates')
  , notifier = {
      service: 'postmark',
      APN: false,
      email: false, // true
      actions: ['comment'],
      tplPath: templatePath,
      key: 'POSTMARK_KEY',
      parseAppId: 'PARSE_APP_ID',
      parseApiKey: 'PARSE_MASTER_KEY'
    };

module.exports = {
  development: {
    db: 'mongodb://localhost/MAMA',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MAMA'
    },
    facebook: {
      clientID: "377696209019979",
      clientSecret: "837e66d5e5330077b134f4256a3d3a68",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "ItkeFSQPMTTRbA5yOtFLeg",
      clientSecret: "Fvw0NCwoyiC7HRU1jeLkYxwilWtNnGI8Iew96JX1m8",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: '344e2d33697b52cefc1a',
      clientSecret: '822bb128184d14c7c4d5ee2a2f59aabd83ba1857',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    linkedin: {
        clientID: 'f5bxjy24xp8q',
        clientSecret: 'GjyHmbKS3xFwLBi7',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
      },
    google: {
      clientID: "1080742679703.apps.googleusercontent.com",
      clientSecret: "-B2qpyywDVY--Ma89pwD_WHW",
      callbackURL: "http://localhost:3000/auth/google/callback"
    },
  },
  test: {
    db: 'mongodb://localhost/MAMA',
    root: rootPath,
    notifier: notifier,
    app: {
      name: 'MAMA'
    },
    facebook: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
      clientID: "CONSUMER_KEY",
      clientSecret: "CONSUMER_SECRET",
      callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
      clientID: 'APP_ID',
      clientSecret: 'APP_SECRET',
      callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    linkedin: {
        clientID: 'f5bxjy24xp8q',
        clientSecret: 'GjyHmbKS3xFwLBi7',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
      },
    google: {
      clientID: "APP_ID",
      clientSecret: "APP_SECRET",
      callbackURL: "http://localhost:3000/auth/google/callback"
    }
  },
  production: {}
};
