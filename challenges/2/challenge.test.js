const sumPrimes = require('./challenge')

describe('Challenge 2', () => {
  test(`It should return 41
  [INPUT]: 15`, () => {
    expect(sumPrimes(15)).toBe(41)
  })

  test(`It should return 77
  [INPUT]: 20`, () => {
    expect(sumPrimes(20)).toBe(77)
  })

  test(`It should return 77
  [INPUT]: 43`, () => {
    expect(sumPrimes(43)).toBe(281)
  })
})
