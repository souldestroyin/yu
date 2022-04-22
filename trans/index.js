const fs = require('fs')

const txt = fs.readFileSync('./input.txt', 'utf-8')


objArr = txt.split('\n').filter(t => t && t !== '\t')

const obj = objArr.reduce((t, c) => {
    const [chinese, english] = c.split('\t')

    if(!t[chinese]) {
        t[chinese] = new Set()
    }

    t[chinese].add(english)

    return t
}, {})


for(let key in obj) {
    obj[key] = [...obj[key]]
}


console.log(obj);

const errs = Object.keys(obj).reduce((t, c) => {
    if (obj[c] && obj[c].length > 1) {
        t = t + c + '\n\t' + obj[c].join('\n\t') + '\n'
    }

    return t
}, '')


fs.writeFileSync('output.json', JSON.stringify(obj), 'utf-8')
fs.writeFileSync('errs.txt', errs, 'utf-8')