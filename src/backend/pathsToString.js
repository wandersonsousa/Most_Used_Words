const fs = require('fs')

module.exports = paths => {
    return new Promise(
        (resolve, reject) => {
            try {
                const string = paths
                    .map(path => 
                        fs.readFileSync(path).toString('utf-8')
                    )
                
                resolve(string.join('\s'))
                
            } catch (error) {
                reject(error)
            }
        }
    )
}