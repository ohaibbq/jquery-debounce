describe("$.fn.debounce", function() {
  var testDiv;
  beforeEach(function() {
    jasmine.Clock.useMock();
    $("#jasmine_content").html('<div id="test"></div>');
    testDiv = $("#test");
  });

  it("calls a delayed function after the delay", function() {
    var called = false;

    testDiv.debounce("click", function() { called = true; }, 1000);

    testDiv.click();
    expect(called).toBeFalsy();

    jasmine.Clock.tick(10);
    expect(called).toBeFalsy();

    jasmine.Clock.tick(1000);
    expect(called).toBeTruthy();
  });

  it("doesn't call the callback more than once", function() {
    var called = [];

    testDiv.debounce("click", function() { called.push("called"); }, 100);

    testDiv.click();
    expect(called.length).toEqual(0);

    for(var i = 0; i < 5; i++) {
      testDiv.click();
      expect(called.length).toEqual(0);
    }

    jasmine.Clock.tick(1000);

    expect(called.length).toEqual(1);
  });

  it("passes the arguments through to the callback", function() {
    var spy = jasmine.createSpy();

    testDiv.debounce("click", spy, 100);
    testDiv.trigger("click", [123, 1234]);

    jasmine.Clock.tick(120);

    expect(spy.mostRecentCall.args).toEqual([jasmine.any(Object), 123, 1234])
  });

});