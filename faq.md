# 📝FAQ

Below is a list of answers to our most frequently asked questions.

## 1. The bot won't answer me! What do I do?

:amariArrow:It could be a permissions issue! Make sure the bot has the `"Send Messages"` and `"Embed Links"` permissions in that channel.

:amariArrow:You may have changed the prefix and forgot about it! Ping [@AmariBot](https://amaribot.com/invite) for the current prefix in use.

:amariArrow:You may be typing the default prefix wrong! Make sure you're actually typing `:?` as the prefix.

## 2. The bot is telling me I don't have permission, what gives?

:amariArrow:You probably don't have the **AmariMod** role! Create a role called AmariMod (case sensitive) in your server and give it to yourself. It'll also work if you have the "Administrator" permission.

## 3. How frequently do people gain EXP with AmariBot?

:amariArrow:Default rate is 1 EXP per message, with a cooldown of 8 seconds! Customize these rates by becoming a donator. Find the level table [here](https://amaribot.com/table).

## 4. How do I make the bot give roles at a certain level?

:amariArrow:With the `rlevel` command! E.g.: `:?rlevel add 1 epic test` would give members the role "epic test" once they reach level 1. Read through `:?help rlevel` for more.

## 5. I configured rlevel correctly, but the bot isn't assigning roles!

:amariArrow:In your server, check if the bot's role is **above** the roles it's trying to give. It **cannot** give roles that are above itself under any circumstance.

## 6. Members are keeping their old roles after getting a new one. Can I change this?

:amariArrow:Yes, you can! Use the `:?rlevel replace` command! To set it back so roles accumulate, keeping all roles, use `:?rlevel accumulate` instead.
