---
aside: false
---

# Message/Voice XP

To use the following commands you need `Administrator` or `AmariMod` role. Some commands may also require owner of server to have a premium account.

## Blacklist

| Name                                                 | Example                     | Usage                                                                  |
| ---------------------------------------------------- | --------------------------- | ---------------------------------------------------------------------- |
| blacklist &#60;add/remove&#62; &#60;@role/ID&#62;    | `:?blacklist add @AmariMod` | Adds a role to the blacklist. Blacklisted roles will not get exp       |
| blacklist &#60;add/remove&#62; &#60;#channel/ID&#62; | `:?blacklist add #general`  | Adds a channel to the blacklist. Blacklisted channels will not get exp |
| blacklist &#60;show&#62;                             | `:?blacklist show`          | Shows all blacklisted roles and channels                               |

## Pmulti

::: warning
This is a premium feature for donators only. Donator is currently a one time payment and allows us to keep hosting the bot.
:::

| Name                                                | Example                   | Usage                                                                            |
| --------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------------- |
| pmulti &#60;set&#62; &#60;1-100&#62;                | `:?pmulti set 5`          | Sets this server's global multiplier                                             |
| pmulti add &#60;#channel/@role&#62; &#60;1-100&#62; | `:?pmulti add #general 5` | Sets different exp rates for each channel for role. Exp for all roles stack      |
| pmulti remove &#60;#channel/@role&#62;              | `:?pmulti add #general`   | Clears a channel or role custom multiplier (resets to current global multiplier) |
| pmulti &#60;show&#62;                               | `:?pmulti show`           | Shows all multipliers for channels and roles                                     |

##Reset

| Name                     | Example             | Usage                                           |
| ------------------------ | ------------------- | ----------------------------------------------- |
| reset &#60;@user&#62;    | `:?reset @Litochee` | Resets the specified user's exp                 |
| reset &#60;points&#62;   | `:?reset points`    | Resets all users exp                            |
| reset &#60;settings&#62; | `:?reset settings`  | Resets all the settings for this server         |
| reset &#60;all&#62;      | `:?reset all`       | Resets all users exp and this server's settings |

## Voice

::: warning
This is a premium feature for donators only. Donator is currently a one time payment and allows us to keep hosting the bot.
:::

| Name                           | Example              | Usage                                                     |
| ------------------------------ | -------------------- | --------------------------------------------------------- |
| voice &#60;enable/disable&#62; | `:?voice enable`     | Enable or Disable Voice Exp (default is disabled)         |
| voice exp &#60;1-100&#62;      | `:?voice exp 5`      | Exp rate for voice exp (default 1) (exp rate \* cooldown) |
| voice cooldown &#60;1-60&#62;  | `:?voice cooldown 2` | Cooldown for voice exp (default 2) (in minutes)           |

## Weekly

| Name                           | Example                | Usage                                                                                                                                                        |
| ------------------------------ | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `weekly &#60;on/off&#62;`      | `:?weekly on`          | Turns the weekly leaderboard on or off                                                                                                                       |
| `weekly &#60;winners&#62;`     | `:?weekly winners`     | Announces the Top 3 winners of the week and resets the leaderboard. If unannounced, users exp will continue to accumulate and the leaderboard will not reset |
| `weekly &#60;leaderboard&#62;` | `:?weekly leaderboard` | If enabled, shows the weekly leaderboard for this server                                                                                                     |
