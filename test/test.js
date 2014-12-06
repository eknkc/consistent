var assert = require("assert");
var consistent = require("../index.js");

describe('consistent', function () {
  it('should create a member', function () {
    var c = consistent({
      members: ['test1', 'test2']
    });

    assert.ok(c);
    assert.ok(c.members['test1']);
    assert.ok(c.members['test2']);
  });

  it('should add new member', function() {
    var c = consistent();
    c.add('test');
    assert.ok(c.members['test']);
  });

  it('should remove member', function() {
    var c = consistent();
    c.add('test');
    c.remove('test');
    assert.ok(!c.members['test']);
  });

  it('should get hash keys', function() {
    var c = consistent({ members: ['test1', 'test2'] });
    assert.ok(c.get('testkey'));
  });

  it('should switch member', function() {
    var c = consistent({ members: ['test1', 'test2'] });
    var key = c.get('testkey');
    c.replace(key, 'test3')
    assert.equal(c.get('testkey'), 'test3');
  });
})
