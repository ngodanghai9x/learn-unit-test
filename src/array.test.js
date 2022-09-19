// test('test array 1', () => {
//   expect([1, 2]).toMatchArray([1, 2]) // order doesn't matter!
// });

// test('test array 2', () => {
//   expect([1, 2, 2]).toMatchArray([2, 1, 2]) // same number of 2s, all good
// });

// test('test array 3', () => {
//   expect([1, 2]).not.toMatchArray([1, 2, 2]) // one extra 2, FAIL
// });

// test('test array 4', () => {
//   expect([1, 2, 2]).not.toMatchArray([1, 2]) // one extra 2, FAIL
// });
const list = [{ userId: 1, name: 'abc' }, { userId: 2, name: 'abc2' }]

test(`test obj array`, () => {
  expect(list).toEqual(          // 1
    expect.arrayContaining([      // 2
      expect.objectContaining({ userId: 1, name: 'abc' }),
      expect.objectContaining({ userId: 2, name: 'abc2' }),
    ])
  )
})

test(`test obj array by map`, () => {
  expect(list).toEqual(          // 1
    expect.arrayContaining(list.map(o =>
      expect.objectContaining(o)
    ))
  )
})