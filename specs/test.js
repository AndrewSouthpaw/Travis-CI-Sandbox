
describe('a test', function () {
  it('should be true', function () {
    expect(true).to.equal(true);
  });
  it('should run again on creating new test', function () {
    expect(true).to.equal(true);
  });
});

describe('should handle changes that break Travis', function () {
  it('should have app val be true', function () {
    expect(myApp).to.be.ok();
  });
});