const fs = require('fs')

function writeDataToFile(pathname, content){
  fs.writeFileSync(pathname, JSON.stringify(content), 'utf-8', (err) => {
    if (err){
      console.log(err)
    }
  })
}

module.exports = { writeDataToFile }