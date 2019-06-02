const packageJson = require('../package.json');

module.exports = {
  env: {
    NODE_ENV: '"production"',
  },
  defineConstants: {
    APP_ENV: '"development"',
    VERSION: `"${packageJson.version}"`,
  },
  weapp: {},
  h5: {}
}
