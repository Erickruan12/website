---
title: $boostingSince
description: '$boostingSince вернет дату начала для кого-то повышающего определенную гильдию.'
id: boostingSince
---

`$boostingSince` вернет дату начала для того, чтобы кто-то повысил свою гильдию.

## Использование

```php
$boostingSince[guildID?;userID?;format?]
```

## Параметры

| Название         | Nbg    | Описание                                                                              | Нужно |
| ---------------- | ------ | ------------------------------------------------------------------------------------- |:-----:|
| ID гильдии?      | целое  | Идентификатор гильдии, где вы хотите проверить, сколько времени кто-то увеличивается. | ложь  |
| ID пользователя? | целое  | ID пользователя, с которого вы хотите проверить дату начала усиления.                 | ложь  |
| формат?          | строка | Формат даты, в который будет перечислены ниже.                                        | ложь  |

| Формат |                                                                |
| ------ | -------------------------------------------------------------- |
| мс     | 1652643158052                                                  |
| дата   | Солнце 15 мая 2022 20:32:38 GMT+0100 (Британское Летнее Время) |

## Пример(ы)

Это вернет дату, когда вы начали усиливать (не работать, если вы не усиливаете):

```javascript
bot.command({
    name: 'boostingSince',
    code: `
  $boostingSince[$guildID;$authorID;date]
  `
});
```