# [`every-own`](https://www.npmjs.com/package/every-own)
Like `[].every` but for objects.

```
npm install every-own
```

```js
const everyOwn = require("every-own")
```

## API

### `everyOwn(object, callback, scope: undefined)`

#### `@param`

- `object` is the object to iterate
- `callback` receives `(value, key, object)`
- `scope` is the `this` context used to `.call` callback

#### `@return boolean`

- Breaks from the loop and returns `false` if any `callback` iteration result returns falsey
- Else returns `true`

## Usage

```js
const everyOwn = require("every-own")
```

```js
everyOwn({}, value => value > 0) // true
everyOwn({x: 3, y: 3}, value => value > 0) // true
everyOwn({x: -3, y: 3}, value => value > 0) // false
everyOwn({x: 3, y: 3}, (value, key) => key.length === 1) // true
```

```js
let array = []
everyOwn({x: 3, y: 3}, value => array.push(value)) // true
array.length // 2
array.join("") // "33"
```

## BFF

[`some-own`](https://www.npmjs.com/package/some-own)
