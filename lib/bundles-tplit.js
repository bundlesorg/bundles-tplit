/*! bundles-tplit.js | @author brikcss <https://github.com/brikcss> | @reference https://github.com/brikcss/bundles-tplit */

const tplit = require('@brikcss/tplit').default
const merge = require('@brikcss/merge')

module.exports = (bundle = {}, bundler = {}) => {
  // Set bundler defaults.
  bundler.data = bundler.data || {}
  bundler.options = bundler.options || {}

  // Compile each output file.
  bundle.output.forEach((file, i) => {
    // Merge front matter with bundler data.
    file.data = merge(file.data, typeof bundler.data === 'function' ? bundler.data(file, bundle) : bundler.data)
    // Compile with tplit and update file content.
    bundle.output[i].content = tplit(file.content, bundler.options)(file.data)
  })

  // Return bundle Object.
  return bundle
}
