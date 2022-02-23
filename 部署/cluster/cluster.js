const cluster = require('cluster')

const os = require('os')

const numCPUs = os.cpus().length

const process = require('process')

const workers = {}
