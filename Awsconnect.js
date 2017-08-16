var simpledb = require('simpledb')

var sdb = new simpledb.SimpleDB(
  {keyid:'YOUR_AWS_KEY_ID',secret:'YOUR_AWS_SECRET_KEY'},
  simpledb.debuglogger
)
