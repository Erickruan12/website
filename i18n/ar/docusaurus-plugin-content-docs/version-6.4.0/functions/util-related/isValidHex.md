---
title: '$isValidHex'
description: '$isValidHex will check if the given hex / decimal color is valid.'
id: isValidHex
---

`$isValidHex` will check if the given hex / decimal color is valid.

## الاستخدام

```php
$isValidHex[colorResolver]
```

## البارامترات

| Field         | النوع           | الديسكبربشين                | مطلوب |
| ------------- | --------------- | --------------------------- |:-----:|
| colorResolver | string, integer | Hex / decimal color string. | true  |

## مثال

This will return `true` as `#30dbd8` is an valid hex color:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[#30dbd8]
  `
});
```

This will return `true` as well as `80` is an valid hexadecimal color:

```javascript
bot.command({
    name: 'isValidHex',
    code: `
  $isValidHex[80]
  `
});
```