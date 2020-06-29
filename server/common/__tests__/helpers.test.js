const {getENVPath} = require('../helpers')
const fs = require('fs')

describe('getENVPath function', () => {
  it('should be defined', () => {
    expect(getENVPath).toBeDefined()
  })

  it('should return default value', () => {
    expect(getENVPath(1)).toBe('.env.default')
    expect(getENVPath(null)).toBe('.env.default')
    expect(getENVPath('')).toBe('.env.default')
    expect(getENVPath('default')).toBe('.env.default')
    expect(getENVPath('test', '.env.test')).toBe('.env.test')
  })

  it('should return asked and existing env name', () => {
    const oldExists = fs.existsSync
    fs.existsSync = () => true
    expect(getENVPath('bla')).toBe('.env.bla')
    fs.existsSync = oldExists
  })
})
