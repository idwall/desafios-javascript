const combinate = require('./challenge')

describe('Challenge 6', () => {
  it('It should return all combinations', () => {
    expect(combinate([1], 4)).toEqual([[1, 1, 1, 1]])

    expect(combinate([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]])

    expect(combinate([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ])

    expect(combinate([2, 5], 3)).toEqual([])

    expect(combinate([], 3)).toEqual([])
  })
})
