---
aside: false
---

<script setup>
import DividePage from '../../../components/dividePage.vue';
</script>

# Guild Resource

List of available endpoints for the guild resource. Along with the endpoint, you can see the HTTP method and the response object. Request examples using axios are also provided on the right.

## Base URL

```
https://amaribot.com/api/v1/guild
```

## Endpoints

<DividePage>

## Fetch leaderboard for guild

<template #left>

## <Badge type="tip" text="GET" /> /leaderboard/`:guildId`

Returns a list of members with their respective exp and level.

### Query Parameters

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| page  | Amount of pages to skip (page \* limit)        |
| limit | Number of members to return (Between 1 and 50) |

### HTTP Response Codes

| Status Code | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| 200         | Success, returns [leaderboard object](/api/v1/information.md#leaderboard-object) |
| 404         | Guild not found                                                                  |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/leaderboard/:guildId',
  method: 'GET',
  headers: {
    Authorization: 'API Token',
    'Content-Type': 'application/json',
  },
});
```

:::

## Responses

::: code-group

```json [200]
{
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140,
      "level": 200
    },
    {
      "id": "2325235234232342",
      "username":"KSJaay",
      "exp": 782140,
      "level": 199
    }
    ...
  ],
  "count": 50,
  "total_count": 1616
}
```

```json [404]
{
  "message": "Guild not found"
}
```

:::

</template>
</DividePage>

<DividePage>

## Fetch all members on leaderboard for guild

<template #left>

## <Badge type="tip" text="GET" /> /raw/leaderboard/`:guildId`

Return all members on the leaderboard for the guild.

### HTTP Response Codes

| Status Code | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| 200         | Success, returns [leaderboard object](/api/v1/information.md#leaderboard-object) |
| 404         | Guild not found                                                                  |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/raw/leaderboard/:guildId',
  method: 'GET',
  headers: {
    Authorization: 'API Token',
    'Content-Type': 'application/json',
  },
});
```

:::

## Responses

::: code-group

```json [200]
{
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140,
      "level": 200
    },
    {
      "id": "2325235234232342",
      "username":"KSJaay",
      "exp": 782140,
      "level": 199
    }
    ...
  ],
  "count": 50,
  "total_count": 1616
}
```

```json [404]
{
  "message": "Guild not found"
}
```

:::

</template>
</DividePage>

<DividePage>

## Fetch leaderboard for guild

<template #left>

## <Badge type="tip" text="GET" /> /weekly/`:guildId`

Returns a list of members with their weekly exp.

### Query Parameters

| Name  | Description                                    |
| ----- | ---------------------------------------------- |
| page  | Amount of pages to skip (page \* limit)        |
| limit | Number of members to return (Between 1 and 50) |

### HTTP Response Codes

| Status Code | Description                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------- |
| 200         | Success, returns [weekly leaderboard object](/api/v1/information.md#weekly-leaderboard-object) |
| 404         | Guild not found                                                                                |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/weekly/:guildId',
  method: 'GET',
  headers: {
    Authorization: 'API Token',
    'Content-Type': 'application/json',
  },
});
```

:::

## Responses

::: code-group

```json [200]
{
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140,
      "level": 200
    },
    {
      "id": "2325235234232342",
      "username":"KSJaay",
      "exp": 782140,
      "level": 199
    }
    ...
  ],
  "count": 50,
  "total_count": 1616
}
```

```json [404]
{
  "message": "Guild not found"
}
```

:::

</template>
</DividePage>

<DividePage>

## Fetch all members on leaderboard for guild

<template #left>

## <Badge type="tip" text="GET" /> /raw/weekly/`:guildId`

Returns all members with their weekly exp.

### HTTP Response Codes

| Status Code | Description                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------- |
| 200         | Success, returns [weekly leaderboard object](/api/v1/information.md#weekly-leaderboard-object) |
| 404         | Guild not found                                                                                |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/raw/weekly/:guildId',
  method: 'GET',
  headers: {
    Authorization: 'API Token',
    'Content-Type': 'application/json',
  },
});
```

:::

## Responses

::: code-group

```json [200]
{
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140,
    },
    {
      "id": "2325235234232342",
      "username":"KSJaay",
      "exp": 782140,
    }
    ...
  ],
  "count": 50,
  "total_count": 1616
}
```

```json [404]
{
  "message": "Guild not found"
}
```

:::

</template>
</DividePage>
