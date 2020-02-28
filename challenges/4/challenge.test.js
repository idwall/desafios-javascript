const normalizeData = require('./challenge')

describe('Challenge 4', () => {
  test(`It should execute normalize data with given data as example`, async () => {
    const unormalized = {
      id: '6197b77e-3942-11ea-a137-2e728ce88125',
      user: {
        id: '6197ba94',
        name: 'Laura',
      },
      reports: [
        {
          id: '51ddf1a9',
          result: {
            document: '356.4325-10',
            status: 'em análise',
          },
        },
      ],
    }

    const normalized = {
      results: {
        '6197b77e-3942-11ea-a137-2e728ce88125': {
          id: '6197b77e-3942-11ea-a137-2e728ce88125',
          user: '6197ba94',
          reports: ['51ddf1a9'],
        },
      },
      users: {
        '6197ba94': { id: '6197ba94', name: 'Laura' },
      },
      reports: {
        '51ddf1a9': {
          id: '51ddf1a9',
          user: '6197ba94',
          document: '356.4325-10',
          status: 'em análise',
        },
      },
    }

    expect(normalizeData(unormalized)).toEqual(normalized)
  })

  test(`It should execute normalize data with two results`, async () => {
    const unormalized = {
      id: '3942-2e728ce88125-11ea-a137-a98dy12uhd',
      user: {
        id: '90013adv',
        name: 'Milson',
      },
      reports: [
        {
          id: '512dg5f1a9',
          result: {
            document: '356.4325-10',
            status: 'em análise',
          },
        },
        {
          id: '01223saf',
          result: {
            document: '123.09312-99',
            status: 'concluido',
          },
        },
      ],
    }

    const normalized = {
      results: {
        '3942-2e728ce88125-11ea-a137-a98dy12uhd': {
          id: '3942-2e728ce88125-11ea-a137-a98dy12uhd',
          user: '90013adv',
          reports: ['512dg5f1a9', '01223saf'],
        },
      },
      users: {
        '90013adv': { id: '90013adv', name: 'Milson' },
      },
      reports: {
        '512dg5f1a9': {
          id: '512dg5f1a9',
          user: '90013adv',
          document: '356.4325-10',
          status: 'em análise',
        },
        '01223saf': {
          id: '01223saf',
          user: '90013adv',
          document: '123.09312-99',
          status: 'concluido',
        },
      },
    }

    expect(normalizeData(unormalized)).toEqual(normalized)
  })
})
