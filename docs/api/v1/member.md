---
aside: false
---

# Member Resource

List of available endpoints for the member resource. Along with the endpoint, you can see the HTTP method and the response object. Request examples using axios are also provided on the right.

<script setup>
import DividePage from '../../../components/dividePage.vue';
</script>

## Base URL

```
https://amaribot.com/api/v1/guild/
```

## Endpoints

<DividePage>

## Fetch a specific member from a guild using their user ID

<template #left>

## <Badge type="tip" text="GET" /> /`:guildId`/member/`:userId`

Return all members on the leaderboard for the guild.

### HTTP Response Codes

| Status Code | Description                                                                 |
| ----------- | --------------------------------------------------------------------------- |
| 200         | Success, returns [member object](/api/v1/information.md#full-member-object) |
| 404         | Guild not found                                                             |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/:guildId/member/:userId',
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
  "id": "2325235234232342",
  "username": "KSJaay",
  "exp": 782140,
  "level": 199,
  "weeklyExp": 365
}
```

```json [404]
{
  "message": "User not found"
}
```

:::

</template>
</DividePage>

<DividePage>

## Request multiple members from a guild using their user ID

<template #left>

## <Badge type="tip" text="GET" /> /`:guildId`/members

Return all members on the leaderboard for the guild.

### HTTP Response Codes

| Status Code | Description                                                                      |
| ----------- | -------------------------------------------------------------------------------- |
| 200         | Success, returns [member object](/api/v1/information.md#full-leaderboard-object) |
| 404         | Guild not found                                                                  |

</template>

<template #right>

## Request Example

::: code-group

```js [axios]
axios({
  url: 'https://amaribot.com/api/v1/guild/:guildId/member/:userId',
  method: 'GET',
  body: {
    members: ['2325235234232342', '244233619897360385', '2342342342342342'],
  },
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
  "guild": "1133726490001940532",
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140,
      "level": 200,
      "weeklyExp": 368
    },
    {
      "id": "2325235234232342",
      "username": "KSJaay",
      "exp": 782140,
      "level": 199,
      "weeklyExp": 365
    }
    ...
  ],
  "total_members": 3,
  "queried_members": 3
}
```

```json [404]
{
  "error": "Unable to find list of members"
}

:::

</template>
</DividePage>
```
