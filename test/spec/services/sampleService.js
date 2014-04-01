'use strict';

describe('Service: sampleService', function () {

  // load the service's module
  beforeEach(module('examplesApp'));

  // instantiate service
  var sampleService;
  beforeEach(inject(function (_sampleService_) {
    sampleService = _sampleService_;
  }));

  it('should do something', function () {
    expect(!!sampleService).toBe(true);
  });
});
