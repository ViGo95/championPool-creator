const user = require('../components/users/network')

const routes = (app) => {
  app.use('/', user)
}

module.exports = routes