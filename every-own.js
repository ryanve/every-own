function everyOwn(o, cb, scope) {
  var owns = {}.hasOwnProperty
  for (var k in o) {
    if (owns.call(o, k)) {
      if (!cb.call(scope, o[k], k, o)) {
        return false
      }
    }
  }
  return true
}

module.exports = everyOwn;
