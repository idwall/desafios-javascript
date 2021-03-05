const expect = require('chai').expect
const paginate = require('./challenge')

describe('Challenge 5', () => {
  let collection

  beforeEach(() => {
    collection = Array.apply(null, Array(100)).map((_, i) => ({
      id: i,
      userId: 1,
      title: 'ut quo aut ducimus alias',
      body: 'quam occaecati qui deleniti consectetur',
    }))
  })

  describe('Default pagination', () => {
    it('should return 10 items', () => {
      const results = paginate(collection)
      expect(results.data.length).to.equal(10)
    })

    it('should return current page as 1', () => {
      const results = paginate(collection)
      expect(results.currentPage).to.equal(1)
    })

    it('should throw error if not array', () => {
      expect(paginate.bind(null, 'string')).to.throw(/Expect array and got string/)
    })

    it('should return the correct default values', () => {
      const results = paginate(collection)
      expect(results.currentPage).to.equal(1)
      expect(results.perPage).to.equal(10)
      expect(results.total).to.equal(100)
      expect(results.totalPages).to.equal(10)
      expect(results.data).to.eql(collection.slice(0, 10))
    })
  })

  it('should return 15 items', () => {
    const results = paginate(collection, 1, 15)
    expect(results.currentPage).to.equal(1)
    expect(results.data.length).to.equal(15)
    expect(results.perPage).to.equal(15)
    expect(results.totalPages).to.equal(7)
  })
})
