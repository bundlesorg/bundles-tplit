/* eslint-env jest */
const bundle = require('@bundles/core')
const tplit = require('../lib/bundles-tplit.js')
const path = require('path')
const log = require('loglevel')
log.setLevel('silent')

test('Compile with simple data', () => {
  expect.assertions(2)
  return bundle({
    bundles: [{
      id: 'test1',
      input: ['test/fixtures/simple.md'],
      bundlers: [{
        run: tplit
      }]
    }],
    data: {
      name: 'Jonny',
      age: '16'
    }
  }).then(result => {
    expect(result.bundles.length).toBe(1)
    expect(result.bundles[0]).toMatchObject({
      success: true,
      id: 'test1',
      output: [{
        data: {
          name: 'Jonny',
          age: '16'
        },
        content: '# Jonny\'s story\n\nThis is a story about Jonny. Jonny is 16 years old.\n\nTHE END.\n'
      }]
    })
  })
})

test('Compile with tplit options', () => {
  expect.assertions(2)
  return bundle({
    bundles: [{
      id: 'test2',
      input: ['test/fixtures/options.md'],
      bundlers: [{
        run: tplit,
        options: {
          prop: 'props',
          map: (value, key) => key === 'name' && value.toUpperCase()
        }
      }],
      data: {
        name: 'Jonny',
        age: '16'
      }
    }]
  }).then(result => {
    expect(result.bundles.length).toBe(1)
    expect(result.bundles[0]).toMatchObject({
      success: true,
      id: 'test2',
      output: [{
        data: {
          name: 'JONNY',
          age: '16'
        },
        content: '# JONNY\'S story\n\nThis is a story about JONNY. JONNY is 16 years old.\n\nTHE END.\n'
      }]
    })
  })
})

test('Compile with complex data and front matter', () => {
  expect.assertions(2)
  return bundle({
    bundles: [{
      id: 'test3',
      input: ['test/fixtures/complex.md'],
      data: (file) => {
        return {
          source: file.source.path,
          name: path.basename(file.source.path)
        }
      },
      bundlers: [{
        run: tplit
      }]
    }]
  }).then(result => {
    expect(result.bundles.length).toBe(1)
    expect(result.bundles[0]).toMatchObject({
      success: true,
      id: 'test3',
      output: [{
        data: {
          testing: 123,
          source: 'test/fixtures/complex.md',
          name: 'complex.md'
        },
        content: '# Complex Data\n\n## File Metadata\n\n- SOURCE: test/fixtures/complex.md\n- NAME: complex.md\n\n## Other data\n\nThe variable: 123. I want to include a message:\n\n> I am not from around here.\n\n'
      }]
    })
  })
})
