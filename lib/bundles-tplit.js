/*! bundles-tplit.js | @author brikcss <https://github.com/brikcss> | @reference https://github.com/brikcss/bundles-tplit */

const tplit = require('@brikcss/tplit').default

module.exports = (bundle = {}, bundler = {}) => {
  // Set bundler defaults.
  bundler.options = bundler.options || {}

  // Compile each output file with tplit and update file content.
  bundle.output.map((file) => {
    file.content = tplit(file.content, bundler.options)(file.data)
    return file
  })

  // Return bundle Object.
  return bundle
}
