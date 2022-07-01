const fs = require('fs')

function getPackageVersion(packageName) {
  const pkgPath = `${__dirname}/../../../node_modules/${packageName}`
  const pkg = JSON.parse(fs.readFileSync(`${pkgPath}/package.json`, 'utf8'))
  return pkg['version']
}

module.exports = getPackageVersion
