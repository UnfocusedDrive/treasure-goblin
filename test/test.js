const expect = require("chai").expect;
const _ = require("../src/util/common.ts").default;

describe('Utils', function () {
  it('camel2Kebab', () => {
    const value = _.camel2Kebab('pizzaTime');
    expect(value).to.equal('pizza-time');
  });

  it('trimLeadingZeroes', () => {
    const value = _.trimLeadingZeroes('0001');
    expect(value).to.equal('1');
  });
});
