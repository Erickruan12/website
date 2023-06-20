---
title: $mentioned
description: Retrieve the mentioned User ID.
---

This function returns the mentioned user ID

```php
$mentioned[arg]
```

```javascript
bot.command({
name: "whois",
code: `$mentioned[1] - is the mentioned user ID.`
/*
    Arg Numbers
1- Return the first mentioned
2- Return the second mentioned
and so on
*/
})
```
