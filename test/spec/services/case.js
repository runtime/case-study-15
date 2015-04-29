'use strict';

describe('Service: case', function () {

  // load the service's module
  beforeEach(module('caseStudiesApp'));

  // instantiate service
  var case;
  beforeEach(inject(function (_case_) {
    case = _case_;
  }));

  it('should do something', function () {
    expect(!!case).toBe(true);
  });

});
