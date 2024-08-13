# Announcements

::: warning
To use the following commands you need `Administrator` or `AmariMod` role.
:::

### Announce

| Name                                                        | Example                                                            | Usage                                                                |
| ----------------------------------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------------- |
| &#60;announce / ann&#62;                                    | :?announce                                                         | Get more information about the announce command                      |
| announce set &#60;#channel/dm/off&#62;                      | :?announce set #general                                            | Sets how users will receive announcements for level up               |
| announce &#60;refresh&#62;                                  | :?announce refresh                                                 | Reset the announcement messages to show up where the user levels up. |
| announce &#60;ping&#62; &#60;on/off&#62;                    | :?announce ping on                                                 | Pings the user in the announcement message                           |
| announce &#60;custom&#62; &#60;text&#62;                    | :?announce custom **CONGRATS** You are now level `{level}`!!!      | Sets a custom announcement message                                   |
| announce level &#60;\*&#62;                                 | :?announce level                                                   | Shows a list of the available variables for the command              |
| announce level &#60;add&#62; &#60;level&#62; &#60;text&#62; | :?announce level 5 add **CONGRATS** You are now level `{level}`!!! | Sets a custom announcement message for specific level                |
| announce level &#60;remove&#62; &#60;level&#62;             | :?announce level remove 5                                          | Removes the custom announce message from a specific level            |
| announce level &#60;test&#62; &#60;level&#62;               | :?announce level test 5                                            | Test a custom announcement                                           |
| announce level &#60;show&#62;                               | :?announce level show                                              | Shows a list of the currentlevels which have a custom announcement   |

## Variables

Variables can be used in the custom announcement message. The variables are replaced with the value when the message is sent.

#### User Variables

| Variable            | Value              |
| ------------------- | ------------------ |
| `{user}`            | @AmariBot          |
| `{user.name}`       | amaribot           |
| `{user.globalName}` | AmariBot           |
| `{user.id}`         | 339254240012664832 |
| `{user.avatarURL}`  | User Avatar URL    |
| `{user.nick}`       | User nickname      |
| `{user.exp}`        | Member experience  |

#### Level Variables

| Variable               | Value                     |
| ---------------------- | ------------------------- |
| `{level}`              | Obtained level            |
| `{level.previous}`     | Previous level            |
| `{level.previous.exp}` | Previous level experience |
| `{level.next}`         | Next Level                |
| `{level.next.exp}`     | Next level experience     |

#### Rewards Variables

| Variable                     | Value                                                  |
| ---------------------------- | ------------------------------------------------------ |
| `{reward}`                   | Obtained role                                          |
| `{reward.role.name}`         | Obtained role name                                     |
| `{reward.rolecount}`         | Total role rewards                                     |
| `{reward.rolecount.progess}` | Percentage of roles user has from all roles obtainable |
| `{reward.previous}`          | Previous role                                          |
| `{reward.next}`              | Next role                                              |

#### Server Variables

| Variable           | Value       |
| ------------------ | ----------- |
| `{server}`         | Server name |
| `{server.id}`      | Server ID   |
| `{server.iconURL}` | Server icon |

#### Channel Variables

| Variable         | Value                           |
| ---------------- | ------------------------------- |
| `{channel}`      | Channel user leveled up in      |
| `{channel.id}`   | Channel name user leveled up in |
| `{channel.name}` | Channel ID user leveled up in   |

#### Date Variables

| Variable           | Value                                                    |
| ------------------ | -------------------------------------------------------- |
| `{date}`           | Date                                                     |
| `{date\[format\]}` | [Date format](https://day.js.org/docs/en/display/format) |
