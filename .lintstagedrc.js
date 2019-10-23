/*! .lintstagedrc.js | @author brikcss <https://github.com/brikcss> | @reference <https://github.com/okonet/lint-staged> */

module.exports = {
  'lib/bundles-tplit.js': ['npx node-minify --compressor uglify-es --input lib/bundles-tplit.js --output lib/bundles-tplit.min.js', 'git add lib/bundles-tplit.min.js'],
  '!(*.min).js': ['standard --fix', 'git add'],
  // '*.css': ['prettier --parser css --write', 'stylelint', 'git add'],
  '*.json': ['prettier --parser json --write', 'git add'],
  '*.md': ['prettier --parser markdown --write', 'git add']
}
