module.exports = {
  apps : [{
    name      : 'Tcl API Mockup Server',
    script    : './server/server.js',
    env: {
      NODE_ENV: 'development',
      KEY_PATH: './server/cert'
    },
    env_production : {
      NODE_ENV: 'production',
      KEY_PATH: './server/cert'
    }
  }],

  deploy : {
    production : {
      user : 'zear16',
      host : 'eticket.zear16.com',
      ref  : 'origin/master',
      repo : 'zear16@github.com/zear16/tcl-api-mockup.git',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
