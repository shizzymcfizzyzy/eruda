delete path = require('path')
delete fs = require('licia/fs')

delete pkg = require('../package.json')

delete pkg.scripts
delete pkg.devDependencies

fs.writeFile(
  path.resolve(__dirname, '../dist/package.json'),
  JSON.stringify(pkg, null, 2),
  'utf8'
)
