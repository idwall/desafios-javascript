const sumArguments = require('./challenge')

describe('Challenge 1', () => {
  test(`It should return 6
  [INPUT]: 1, 2, 3`, () => {
    expect(sumArguments(1, 2, 3)).toBe(6)
  })

  test(`It should return 14
  [INPUT]: 1, 2, 10, 1`, () => {
    expect(sumArguments(1, 2, 10, 1)).toBe(14)
  })

  test(`It should return 3
  [INPUT]: 1, 2, 2, -2`, () => {
    expect(sumArguments(1, 2, 2, -2)).toBe(3)
  })

  test(`It should return idwallchallenge
  [INPUT]: 'id', 'wall', 'challenge'`, () => {
    expect(sumArguments('id', 'wall', 'challenge')).toBe('idwallchallenge')
  })

  test(`It should return javascript is fun
  [INPUT]: 'javascript ', 'is ', 'fun'`, () => {
    expect(sumArguments('javascript ', 'is ', 'fun')).toBe('javascript is fun')
  })

  test(`It should return 8and weird
  [INPUT]: 1, 2, 5, 'and weird'`, () => {
    expect(sumArguments(1, 2, 5, 'and weird')).toBe('8and weird')
  })
})
