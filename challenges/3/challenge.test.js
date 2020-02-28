const MDC = require('./challenge')

describe('Challenge 3', () => {
  test(`It should return 6
  [INPUT]: 12, 18`, () => {
    expect(MDC(12, 18)).toBe(6)
  })

  test(`It should return 1
  [INPUT]: 20, 33`, () => {
    expect(MDC(20, 33)).toBe(1)
  })

  test(`It should return 23
  [INPUT]: 368, 391`, () => {
    expect(MDC(368, 391)).toBe(23)
  })

  test(`It should return 92
  [INPUT]: 1380, 1472`, () => {
    expect(MDC(1380, 1472)).toBe(92)
  })
})
