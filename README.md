# Everd

**Easy to download! In the command bar enter this line of code:** `npm i evard --save` 

*Evard is a simple Node Package that many futures for you to use in JS*

# Usage

**Font Generator**
*Everd's Font Generator Only supports 1 built in font for* **NOW**
```js
const evard = require('evard')
const text = evard.run({Function: 'font', message: 'hey'})

console.log(text)
```

**Evern Log**
```js
const evard = require('evard')

evard.log('hey')
```

**JS Add API**
```js
const evard = require('evard')
const Answer = evard.run({Function: 'add', one: 1, two: 2})

console.log(Answer)
```


*Evard is in beta more functions being added soon...*
# Version 1.0.12