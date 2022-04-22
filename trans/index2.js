const fs = require('fs')
const output = require('./output.json')

const head = `
export default {`

const tail = `
}`

let body = ''

for( let key in output) {
    body += '"' + key + '",\n'
}


fs.writeFileSync('keys.js', head + body + tail, 'utf-8')

