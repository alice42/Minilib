const path = require('path')
const fse = require('fs-extra')

// Copy files
const files = ['README.md', '.npmrc']

const copyFile = file => {
  const buildPath = resolveBuildPath(file)
  return new Promise(resolve => {
    fse.copy(file, buildPath, err => {
      if (err) throw err
      resolve()
    })
  }).then(() => console.log(`Copied ${file} to ${buildPath}`))
}

const resolveBuildPath = file => path.resolve(__dirname, '../dist/', path.basename(file))
//
const createPackageFile = () =>
  new Promise(resolve => {
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err
      }

      resolve(data)
    })
  })
    .then(data => JSON.parse(data))
    .then(packageData => {
      const {
        name,
        author,
        version,
        description,
        keywords,
        license,
        repository,
        publishConfig,
        dependencies,
        peerDependencies
      } = packageData

      const minimalPackage = {
        name,
        author,
        version,
        description,
        main: './index.js',
        keywords,
        license,
        repository,
        publishConfig,
        dependencies,
        peerDependencies
      }

      return new Promise(resolve => {
        const buildPath = path.resolve(__dirname, '../dist/', 'package.json')
        const data = JSON.stringify(minimalPackage, null, 2)
        fse.writeFile(buildPath, data, err => {
          if (err) throw err
          console.log(`Created package.json in ${buildPath}`)
          resolve()
        })
      })
    })
Promise.all(files.map(file => copyFile(file))).then(() => createPackageFile())
