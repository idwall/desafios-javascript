const extractSize = require('./challenge')

describe('Challenge 6', () => {
  test(`It should return {width: 20, height: 60}
  [INPUt]: '<div style="height: 20px; width: 60px;"></div>'`, async () => {
    const htmlTemplate = `<div style="height: 20px; width: 60px;"></div>`

    expect(extractSize(htmlTemplate)).toEqual({ height: 20, width: 60 })
  })

  test(`It should return {width: 120, height: 20}
  [INPUT]: '<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>'`, async () => {
    const htmlTemplate = `<div style="background-color: red;"> <img style="width: 120px; height: 20%" /></div>`

    expect(extractSize(htmlTemplate)).toEqual({ width: 120, height: 20 })
  })

  test(`It should return {width: 442, height: 911}
  [INPUT]: \`
    <div style="width: 442px;">
      <span style="height: 911px;"></span>
      <span style="height: 121px;"></span>
    </div>
  \``, async () => {
    const htmlTemplate = `
    <div style="width: 442px;">
      <span style="height: 911px;"></span>
      <span style="height: 121px;"></span>
    </div>
    `

    expect(extractSize(htmlTemplate)).toEqual({ width: 442, height: 911 })
  })

  test(`It should return {width: 0, height: 0}
  [INPUT]: ''`, async () => {
    const htmlTemplate = ``

    expect(extractSize(htmlTemplate)).toEqual({ width: 0, height: 0 })
  })
})
