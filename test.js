const everyOwn = require("./")
const assert = require("assert")

assert.strictEqual(everyOwn({}, value => value > 0), true)
assert.strictEqual(everyOwn({x: 3, y: 3}, value => value > 0), true)
assert.strictEqual(everyOwn({x: -3, y: 3}, value => value > 0), false)
assert.strictEqual(everyOwn({x: 3, y: 3}, (value, key) => key.length === 1), true)

if (true) {
  let array = []
  assert.strictEqual(everyOwn({x: 3, y: 3}, value => array.push(value)), true)
  assert.strictEqual(array.length, 2)
  assert.strictEqual(array.join(""), "33")
}

if (true) {
  let that = {}
  let object = {x: 8}
  everyOwn(object, function(value, key, o) {
    assert.strictEqual(this, that)
    assert.strictEqual(arguments.length, 3)
    assert.strictEqual(value, 8)
    assert.strictEqual(key, "x")
    assert.strictEqual(o, object)
  }, that)
}

console.log("Tests passed =)")
