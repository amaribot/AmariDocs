# Updates

Information about the latest updates

## Voice exp & Halloween overlays

Hello everyone! I hope you're all having a great evening, we have a new update for you all! We're going to be beta testing Voice Exp! Unfortunately this command will only be allowed for Donors for the time being... But, once it's all sorted out and there are no bugs we will be releasing it to use for free! We also have some awesome Halloween overlays that will appear on your rank cards <3

:amariArrow: `help voice`

This command will let you know what you can do with voice exp currently! This will be updated with new features before full release. We hope you all have a great evening!

![Rank Overlay](/updates/overlay.png)

## Rank cards & opacity command

Guess what we have for you?! That's right! A whole new look to the rank cards. But not just that, you can now change the opacity of your rank card, using:

:amariArrow: `profile opacity <0 - 100>`

This means that you can set the opacity to 0, and use the background to make your own rank card design. How exciting!

In the future, this feature will only be available to donators.

![Rank Cards](/updates/rank.png)

## Final embed & weekly winners

Finally! **All embeds** now have a fresh new look! We think it fits the Amari theme, much better.

As promised, it's about time for the **weekly winners** announcement image to get a redesign, as well. Here it is!

![Winners](/updates/weekly.png)

## Pmulti for roles & embed revamp

The `pmulti` for roles is now implemented! You can finally change how much exp each message is worth, depending on each role. Role exp will be added to the global exp or any channel exp you've set up.

:amariArrow: `pmulti <1-100>` - Sets the server's global multiplier.
:amariArrow: `pmulti add <#channel/@role> <1-100>` - Sets different exp rates for each channel or role.
:amariArrow: `pmulti remove <#channel/@role>` - Clears a channel or role custom multiplier.
:amariArrow: `pmulti show` - Shows all multipliers for channels and roles.

Last but not least, all help `<command>` embeds have been updated (new aliases have also been added to some commands)! More embeds to come..

## AmariBeta V4 - Public

Good evening everyone!

I am proud to announce that we are putting out the Amari V4 Beta! All commands will be free for the time of release _(approximately 2 weeks)_. After this time we will be moving it over to production, meaning that all points and settings will be wiped from the Beta bot.

_Don't worry! All points on the official AmariBot will remain (no settings or from the beta will be moved over)._

#### New

```
blacklist
    > new syntax: `:?blacklist <add/remove/show> <@role/#channel>`

pmulti
    > new syntax:
        :?pmulti <add/remove/show> <@role/#channel> Exp
        :?pmulti set <exp> (this is global) > pmulti roles will not give points yet, this will be released later tonight, you can set it up in the mean time

reset
    > now removes roles on reset

modifyexp
    > remove now works properly, roles will be removed and given with rlevel

givelevel
    > loops through the levels and gives roles (e.g.: if given level 6, they will get the level 5 role)
    > follows rules on accumulate/remove

rank
    > now updates avatar
```

#### Behind the scenes

```
> all guild settings are done through cache now (yay)
> level system rehaul, recoded the entire thing works better now
```

#### Upcoming

```
> pmulti roles: later tonight/early tomorrow
> new embeds for EVERYTHING: we'll be working on this all weekend
> new Winners image: I know, this was lacking
> new Rank cards: yes...we got some new goodies
> blacklist commands: blacklist those pesky channels
> 30k milestone event: yea that's right, we're doing it
```

## Pmulti for channels

The pmulti command got an upgrade! You can now change how much exp each message is worth per channel. In the nearby future, the same customization will be available for roles.

:amariArrow: `pmulti <1-100>` - Set global multiplier.

:amariArrow: `pmulti #channel <1-100>` - Set different exp rates for each channel.

:amariArrow: `pmulti #channel remove` - Clear a channels custom multiplier (resets to default global multiplier).

:amariArrow: `pmulti show` - Shows all point multipliers set to channels.
