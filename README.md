# persianize-node
Persianize is set of nodejs tools for validating and converting data in true Persian.

* [Convert](#convert)
* [Validate](#validate)

## Installation

### Via npm
If you have a package.json file in your directory you can require the package and run ```npm install```

```json
{
    "name": "persianize",
    "version": "1.0.*"
}
```

Or run following command to direct usage
```js
npm install persianize
```

### Manual installation
If you didn't use dependency management systems you can install persianize in manual way, download ZIP file and then extract it and all you need is require 'Persianize.js' file on your project and use it.

## Import
You can use both persianize validator and convert in one single object, like every node module you should import this package to your file.

```js
var persianize = require('persianize');
```

## Convert
This object helps you to change phrases to right Persian

### Number
Convert English and Arabic numbers to right Persian numbers.

```js
persianize.convert().number('0123456789').get(); // Output --> ۰۱۲۳۴۵۶۷۸۹
```

### Remove Arabic character
Remove Arabic keyboard characters from Persian text.

```js
persianize.convert().removeArabicChar('فارسي').get(); // Output --> فارسی
```

### Replace space with half-space
Detect persian verbs and replace space with half-space
```js
persianize.convert().halfSpace('می روی').get(); // Output --> می‌روی
```

### Full Convert
This method will convert number, convert arabic characters to Persian and replace space with half-space.

```js
persianize.convert().all('فارسي 1').get(); // Output --> فارسی ۱
```

## Validate
Validating Persian language inputs like Persian number, Persian alphabet...


### Alphabel
Validate Persian Alphabet

```js
persianize.validator().alpha('فارسی'); // Output --> TRUE
```

### Number
Validate Persian Number

```js
persianize.validator().number('۱۲۳'); // Output --> TRUE
```

### Alpha_Num
Validate Persian Alphabet and numbers

```js
persianize.validator().alphaNum('۳فارسی'); //Output --> TRUE
```

### Text
Validate Persian alphabet, numbers, space, half-space and special characters.

```js
persianize.validator().text('۳ فارسی') //Output --> TRUE
```
