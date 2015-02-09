describe('queenAttack', function() {
  it('is false if the coordinates are not horiontally, vertically, or diagonally in line with each other', function() {
    expect(queenAttack([1, 1], [2, 3])).to.equal(false);
  });

  it('is true if the coordinates are horizontally in line with each other', function() {
    expect(queenAttack([1, 1], [5, 1])).to.equal(true);
  });
});
