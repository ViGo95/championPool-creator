const success = (req, res, status, message, log) => {
  console.log(log)

  res.header({
    message: log
  })

  res.status(status || 200).send(message)
}

const error = (req, res, status, message, error) => {
  console.log(message)

  res.header({
    message: message
  })

  res.status(status || 500).send(error)
}

module.exports = {
  success,
  error,
}