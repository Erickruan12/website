---
title: '$isGuildMuted'
description: '$isGuildMuted is similar but not to confuse with `$isMuted`, this will check if the user is server muted.'
id: isGuildMuted
---

`$isGuildMuted` is similar but not to confuse with `$isMuted`, this will check if the user is server muted.

## Використання

```php
$isGuildMuted[userID?;guildID?]
```

## Параметри

| Поле     | Тип     | Опис                                                          | Обов'язковий |
| -------- | ------- | ------------------------------------------------------------- |:------------:|
| userID?  | integer | The ID of the user you want to check if they're server muted. |      ні      |
| guildID? | integer | The ID of the guild where they're server muted in.            |      ні      |

## Приклад(и)

This will return either `true` or `false` depending on if you're server muted or not:

```javascript
bot.command({
    name: 'isGuildMuted',
    code: `
  $isGuildMuted[$authorID;$guildID]
  `
});
```