## Base URL

```
https://amaribot.com/api/v1/
```

## Authentication

All authentication is verified by the use of API Keys. The key must be passed in the `Authorization` Header.

If you would like to get an API key, please click [here](https://amaribot.com/support) to apply, once approved you will be DM'd by AmariBot with your key (please allow up to 24 hours).

## Rate Limiting

Rate limiting is used to prevent abuse of the API and let resources be shared equally. API is limited to **60** requests per minute. If you have hit your rate limit a **429** response will be returned and you won't be able to make any more requests for 60 minutes.

## Libraries

Here are some libraries that AmariBot does not maintain but abide by our standard which include authentication and rate limiting. If you require support please contact the developers within the AmariBot Discord.

| Name                                                     | Language   | Developer |
| -------------------------------------------------------- | ---------- | --------- |
| [AmariBot.js](https://amaribot.js.org/)                  | JavaScript | 4shadowed |
| [AmariBot.py](https://amaripy.readthedocs.io/en/latest/) | Python     | \_adamt   |

## Structures

List of structures used in AmariBot API. These are used to standardize the data returned from the API.

### Member structure

| Name     | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| id       | string | The ID of the member             |
| username | string | The username of the member       |
| exp      | number | The amount of exp the member has |
| level    | number | The level the member is at       |

### Weekly member structure

| Name     | Type   | Description                             |
| -------- | ------ | --------------------------------------- |
| id       | string | The ID of the member                    |
| username | string | The username of the member              |
| exp      | number | The amount of weekly exp the member has |

### Full member structure

| Name      | Type   | Description                             |
| --------- | ------ | --------------------------------------- |
| id        | string | The ID of the member                    |
| username  | string | The username of the member              |
| exp       | number | The amount of exp the member has        |
| level     | number | The level the member is at              |
| weeklyExp | number | The amount of weekly exp the member has |

### Reward structure

| Name   | Type   | Description                                     |
| ------ | ------ | ----------------------------------------------- |
| roleID | string | The ID of the role                              |
| level  | number | The level user needs to reach to get the reward |

## Objects

Response objects for the API enpoints. These are used to standardize the data returned from the API.

### Full member object

```json
{
  "id": "2325235234232342",
  "username": "KSJaay",
  "exp": 782140,
  "level": 199,
  "weeklyExp": 365
}
```

### Leaderboard Object

```json
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

### Weekly leaderboard Object

```json
{
  "members": [
    {
      "id": "244233619897360385",
      "username": "Scarlette",
      "exp": 792140
    },
    {
      "id": "2325235234232342",
      "username":"KSJaay",
      "exp": 782140
    }
    ...
  ],
  "count": 50,
  "total_count": 1616
}
```

### Full leaderboard Object

```json
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
      "username":"KSJaay",
      "exp": 782140,
      "level": 199,
      "weeklyExp": 365,
    }
    ...
  ],
  "total_members": 5,
  "queried_members": 5
}
```
